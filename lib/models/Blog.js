import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  avatar: { type: String }, // base64 encoded image
});

const SEOSchema = new mongoose.Schema({
  metaTitle: { type: String, maxlength: 60 },
  metaDescription: { type: String, maxlength: 160 },
  focusKeyword: { type: String },
  keywords: [{ type: String }],
  ogTitle: { type: String },
  ogDescription: { type: String },
  ogImage: { type: String }, // base64 or URL
  canonicalUrl: { type: String },
});

const TranslationSchema = new mongoose.Schema({
  title: { type: String },
  excerpt: { type: String },
  content: { type: String },
  seo: { type: SEOSchema },
}, { _id: false });

const BlogSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      enum: ['fr', 'en', 'de'],
      required: true,
      default: 'fr',
      index: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: AuthorSchema,
      required: true,
    },
    featuredImage: {
      type: String, // base64 encoded image
    },
    featuredImageAlt: {
      type: String,
    },
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    }],
    tags: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
    }],
    seo: {
      type: SEOSchema,
      required: true,
    },
    translations: {
      fr: { type: TranslationSchema, default: {} },
      en: { type: TranslationSchema, default: {} },
      de: { type: TranslationSchema, default: {} },
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'scheduled'],
      default: 'draft',
    },
    scheduledDate: {
      type: Date,
    },
    publishedDate: {
      type: Date,
    },
    relatedPosts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    }],
    featured: {
      type: Boolean,
      default: false,
    },
    readTime: {
      type: Number, // in minutes
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Compound index for unique slug per language
BlogSchema.index({ slug: 1, language: 1 }, { unique: true });

// Create indexes for better query performance
BlogSchema.index({ status: 1, language: 1 });
BlogSchema.index({ publishedDate: -1, language: 1 });
BlogSchema.index({ categories: 1, language: 1 });
BlogSchema.index({ tags: 1, language: 1 });

// Calculate read time before saving
BlogSchema.pre('save', function (next) {
  if (this.content) {
    // Average reading speed: 200 words per minute
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }
  next();
});

// Delete the cached model to force Mongoose to use the new schema
delete mongoose.models.Blog;

export default mongoose.model('Blog', BlogSchema);

