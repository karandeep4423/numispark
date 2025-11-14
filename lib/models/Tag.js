import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      enum: ['fr', 'en', 'de'],
      required: true,
      default: 'fr',
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    postCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for unique slug per language
TagSchema.index({ slug: 1, language: 1 }, { unique: true });

// Delete the cached model to force Mongoose to use the new schema
delete mongoose.models.Tag;

export default mongoose.model('Tag', TagSchema);

