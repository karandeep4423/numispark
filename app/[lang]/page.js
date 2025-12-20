"use client";
import {
  Users,
  Smile,
  ArrowUpRight,
  TrendingUp,
  MessageCircle,
  Clock,
  Code,
  Smartphone,
  Megaphone,
  Layout,
  Cloud,
  Zap,
  RefreshCw,
  ShoppingCart,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  UserCheck,
  Eye,
  Award,
  CheckCircle2,
  Briefcase,
  Handshake,
  HeartHandshake,
} from "lucide-react";
import FormCTA from "@/components/Form-CTA/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import Hero from "@/components/HomeHero/page";
import { useTranslation } from "react-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";
import React, { useMemo, useState } from "react";
import LogoCarousel from "@/components/Logo-clients/page";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel/page";
import Feedback from "@/components/Feedback/page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numispark.com";

const TECHNOLOGIES = [
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Angular Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Tailwind css",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Ruby on Rails",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
  },
  {
    name: "Wordpress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Google Analytics",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjg0IiB2aWV3Qm94PSIwIDAgMjU2IDI4NCI+PHBhdGggZmlsbD0iI2Y5YWIwMCIgZD0iTTI1Ni4wMDMgMjQ3LjkzM2EzNS4yMjQgMzUuMjI0IDAgMCAxLTM5LjM3NiAzNS4xNjFjLTE4LjA0NC0yLjY3LTMxLjI2Ni0xOC4zNzEtMzAuODI2LTM2LjYwNlYzNi44NDVDMTg1LjM2NSAxOC41OTEgMTk4LjYyIDIuODgxIDIxNi42ODcuMjRhMzUuMjIgMzUuMjIgMCAwIDEgMzkuMzE2IDM1LjE2eiIvPjxwYXRoIGZpbGw9IiNlMzc0MDAiIGQ9Ik0zNS4xMDEgMjEzLjE5M2MxOS4zODYgMCAzNS4xMDEgMTUuNzE2IDM1LjEwMSAzNS4xMDFjMCAxOS4zODYtMTUuNzE1IDM1LjEwMS0zNS4xMDEgMzUuMTAxUzAgMjY3LjY4IDAgMjQ4LjI5NXMxNS43MTUtMzUuMTAyIDM1LjEwMS0zNS4xMDJtOTIuMzU4LTEwNi4zODdjLTE5LjQ3NyAxLjA2OC0zNC41OSAxNy40MDYtMzQuMTM3IDM2LjkwOHY5NC4yODVjMCAyNS41ODggMTEuMjU5IDQxLjEyMiAyNy43NTUgNDQuNDMzYTM1LjE2IDM1LjE2IDAgMCAwIDQyLjE0Ni0zNC41NlYxNDIuMDg5YTM1LjIyIDM1LjIyIDAgMCAwLTM1Ljc2NC0zNS4yODIiLz48L3N2Zz4=",
  },
  {
    name: "Semrush",
    logo: "https://cdn.brandfetch.io/idt3n8W3ef/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Ahrefs",
    logo: "https://cdn.brandfetch.io/idxB1p5kuP/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Meta Ads",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTUuNyIgaGVpZ2h0PSIxMDQiIHZpZXdCb3g9IjAgMCAyNTYgMTcxIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zTWV0YUljb24wIiB4MT0iMTMuODc4JSIgeDI9Ijg5LjE0NCUiIHkxPSI1NS45MzQlIiB5Mj0iNTguNjk0JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwNjRlMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDA2NGUxIi8+PHN0b3Agb2Zmc2V0PSI4MyUiIHN0b3AtY29sb3I9IiMwMDczZWUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDgyZmIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibG9nb3NNZXRhSWNvbjEiIHgxPSI1NC4zMTUlIiB4Mj0iNTQuMzE1JSIgeTE9IjgyLjc4MiUiIHkyPSIzOS4zMDclIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDA4MmZiIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDA2NGUwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzAwODFmYiIgZD0iTTI3LjY1MSAxMTIuMTM2YzAgOS43NzUgMi4xNDYgMTcuMjggNC45NSAyMS44MmMzLjY3NyA1Ljk0NyA5LjE2IDguNDY2IDE0Ljc1MSA4LjQ2NmM3LjIxMSAwIDEzLjgwOC0xLjc5IDI2LjUyLTE5LjM3MmMxMC4xODUtMTQuMDkyIDIyLjE4Ni0zMy44NzQgMzAuMjYtNDYuMjc1bDEzLjY3NS0yMS4wMWM5LjQ5OS0xNC41OTEgMjAuNDkzLTMwLjgxMSAzMy4xLTQxLjgwNkMxNjEuMTk2IDQuOTg1IDE3Mi4yOTggMCAxODMuNDcgMGMxOC43NTggMCAzNi42MjUgMTAuODcgNTAuMyAzMS4yNTdDMjQ4LjczNSA1My41ODQgMjU2IDgxLjcwNyAyNTYgMTEwLjcyOWMwIDE3LjI1My0zLjQgMjkuOTMtOS4xODcgMzkuOTQ2Yy01LjU5MSA5LjY4Ni0xNi40ODggMTkuMzYzLTM0LjgxOCAxOS4zNjN2LTI3LjYxNmMxNS42OTUgMCAxOS42MTItMTQuNDIyIDE5LjYxMi0zMC45MjdjMC0yMy41Mi01LjQ4NC00OS42MjMtMTcuNTY0LTY4LjI3M2MtOC41NzQtMTMuMjMtMTkuNjg0LTIxLjMxMy0zMS45MDctMjEuMzEzYy0xMy4yMiAwLTIzLjg1OSA5Ljk3LTM1LjgxNSAyNy43NWMtNi4zNTYgOS40NDUtMTIuODgyIDIwLjk1Ni0yMC4yMDggMzMuOTQ0bC04LjA2NiAxNC4yODljLTE2LjIwMyAyOC43MjgtMjAuMzA3IDM1LjI3MS0yOC40MDggNDYuMDdjLTE0LjIgMTguOTEtMjYuMzI0IDI2LjA3Ni00Mi4yODcgMjYuMDc2Yy0xOC45MzUgMC0zMC45MS04LjItMzguMzI1LTIwLjU1NkMyLjk3MyAxMzkuNDEzIDAgMTI2LjIwMiAwIDExMS4xNDh6Ii8+PHBhdGggZmlsbD0idXJsKCNsb2dvc01ldGFJY29uMCkiIGQ9Ik0yMS44MDIgMzMuMjA2QzM0LjQ4IDEzLjY2NiA1Mi43NzQgMCA3My43NTcgMEM4NS45MSAwIDk3Ljk5IDMuNTk3IDExMC42MDUgMTMuODk3YzEzLjc5OCAxMS4yNjEgMjguNTA1IDI5LjgwNSA0Ni44NTMgNjAuMzY4bDYuNTggMTAuOTY3YzE1Ljg4MSAyNi40NTkgMjQuOTE3IDQwLjA3IDMwLjIwNSA0Ni40OWM2LjgwMiA4LjI0MyAxMS41NjUgMTAuNyAxNy43NTIgMTAuN2MxNS42OTUgMCAxOS42MTItMTQuNDIyIDE5LjYxMi0zMC45MjdsMjQuMzkzLS43NjZjMCAxNy4yNTMtMy40IDI5LjkzLTkuMTg3IDM5Ljk0NmMtNS41OTEgOS42ODYtMTYuNDg4IDE5LjM2My0zNC44MTggMTkuMzYzYy0xMS4zOTUgMC0yMS40OS0yLjQ3NS0zMi42NTQtMTMuMDA3Yy04LjU4Mi04LjA4My0xOC42MTUtMjIuNDQzLTI2LjMzNC0zNS4zNTJsLTIyLjk2LTM4LjM1MkMxMTguNTI4IDY0LjA4IDEwNy45NiA0OS43MyAxMDEuODQ1IDQzLjIzYy02LjU3OC02Ljk4OC0xNS4wMzYtMTUuNDI4LTI4LjUzMi0xNS40MjhjLTEwLjkyMyAwLTIwLjIgNy42NjYtMjcuOTYzIDE5LjM5eiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NNZXRhSWNvbjEpIiBkPSJNNzMuMzEyIDI3LjgwMmMtMTAuOTIzIDAtMjAuMiA3LjY2Ni0yNy45NjMgMTkuMzljLTEwLjk3NiAxNi41NjgtMTcuNjk4IDQxLjI0NS0xNy42OTggNjQuOTQ0YzAgOS43NzUgMi4xNDYgMTcuMjggNC45NSAyMS44Mkw5LjAyNyAxNDkuNDgyQzIuOTczIDEzOS40MTMgMCAxMjYuMjAyIDAgMTExLjE0OEMwIDgzLjc3MiA3LjUxNCA1NS4yNCAyMS44MDIgMzMuMjA2QzM0LjQ4IDEzLjY2NiA1Mi43NzQgMCA3My43NTcgMHoiLz48L3N2Zz4=",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Sketch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  },
  {
    name: "Adobe XD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  },
  {
    name: "Aws",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Woo Commerce",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Shopify",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjkyIiB2aWV3Qm94PSIwIDAgMjU2IDI5MiI+PHBhdGggZmlsbD0iIzk1YmY0NiIgZD0iTTIyMy43NzQgNTcuMzRjLS4yMDEtMS40Ni0xLjQ4LTIuMjY4LTIuNTM3LTIuMzU3YTE5NjE0IDE5NjE0IDAgMCAwLTIzLjM4My0xLjc0M3MtMTUuNTA3LTE1LjM5NS0xNy4yMDktMTcuMDk5Yy0xLjcwMy0xLjcwMy01LjAyOS0xLjE4NS02LjMyLS44MDVjLS4xOS4wNTYtMy4zODggMS4wNDMtOC42NzggMi42OGMtNS4xOC0xNC45MDYtMTQuMzIyLTI4LjYwNC0zMC40MDUtMjguNjA0Yy0uNDQ0IDAtLjkwMS4wMTgtMS4zNTguMDQ0QzEyOS4zMSAzLjQwNyAxMjMuNjQ0Ljc3OSAxMTguNzUuNzc5Yy0zNy40NjUgMC01NS4zNjQgNDYuODM1LTYwLjk3NiA3MC42MzVjLTE0LjU1OCA0LjUxMS0yNC45IDcuNzE4LTI2LjIyMSA4LjEzM2MtOC4xMjYgMi41NDktOC4zODMgMi44MDUtOS40NSAxMC40NjJDMjEuMyA5NS44MDYuMDM4IDI2MC4yMzUuMDM4IDI2MC4yMzVsMTY1LjY3OCAzMS4wNDJsODkuNzctMTkuNDJTMjIzLjk3MyA1OC44IDIyMy43NzUgNTcuMzRNMTU2LjQ5IDQwLjg0OGwtMTQuMDE5IDQuMzM5Yy4wMDUtLjk4OC4wMS0xLjk2LjAxLTMuMDIzYzAtOS4yNjQtMS4yODYtMTYuNzIzLTMuMzQ5LTIyLjYzNmM4LjI4NyAxLjA0IDEzLjgwNiAxMC40NjkgMTcuMzU4IDIxLjMybS0yNy42MzgtMTkuNDgzYzIuMzA0IDUuNzczIDMuODAyIDE0LjA1OCAzLjgwMiAyNS4yMzhjMCAuNTcyLS4wMDUgMS4wOTUtLjAxIDEuNjI0Yy05LjExNyAyLjgyNC0xOS4wMjQgNS44OS0yOC45NTMgOC45NjZjNS41NzUtMjEuNTE2IDE2LjAyNS0zMS45MDggMjUuMTYxLTM1LjgyOG0tMTEuMTMxLTEwLjUzN2MxLjYxNyAwIDMuMjQ2LjU0OSA0LjgwNSAxLjYyMmMtMTIuMDA3IDUuNjUtMjQuODc3IDE5Ljg4LTMwLjMxMiA0OC4yOTdsLTIyLjg4NiA3LjA4OEM3NS42OTQgNDYuMTYgOTAuODEgMTAuODI4IDExNy43MiAxMC44MjgiLz48cGF0aCBmaWxsPSIjNWU4ZTNlIiBkPSJNMjIxLjIzNyA1NC45ODNhMTk2MTQgMTk2MTQgMCAwIDAtMjMuMzgzLTEuNzQzcy0xNS41MDctMTUuMzk1LTE3LjIwOS0xNy4wOTljLS42MzctLjYzNC0xLjQ5Ni0uOTU5LTIuMzk0LTEuMDk5bC0xMi41MjcgMjU2LjIzM2w4OS43NjItMTkuNDE4UzIyMy45NzIgNTguOCAyMjMuNzc0IDU3LjM0Yy0uMjAxLTEuNDYtMS40OC0yLjI2OC0yLjUzNy0yLjM1NyIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xMzUuMjQyIDEwNC41ODVsLTExLjA2OSAzMi45MjZzLTkuNjk4LTUuMTc2LTIxLjU4Ni01LjE3NmMtMTcuNDI4IDAtMTguMzA1IDEwLjkzNy0xOC4zMDUgMTMuNjkzYzAgMTUuMDM4IDM5LjIgMjAuOCAzOS4yIDU2LjAyNGMwIDI3LjcxMy0xNy41NzcgNDUuNTU4LTQxLjI3NyA0NS41NThjLTI4LjQ0IDAtNDIuOTg0LTE3LjctNDIuOTg0LTE3LjdsNy42MTUtMjUuMTZzMTQuOTUgMTIuODM1IDI3LjU2NSAxMi44MzVjOC4yNDMgMCAxMS41OTYtNi40OSAxMS41OTYtMTEuMjMyYzAtMTkuNjE2LTMyLjE2LTIwLjQ5MS0zMi4xNi01Mi43MjRjMC0yNy4xMjkgMTkuNDcyLTUzLjM4MiA1OC43NzgtNTMuMzgyYzE1LjE0NSAwIDIyLjYyNyA0LjMzOCAyMi42MjcgNC4zMzgiLz48L3N2Zz4=",
  },
  {
    name: "PrestaShop",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iI0RGMDA2NyIgZD0iTTIwOC4zOSA4MS4yNWMtMTEuNDctMy41NC0yNC4zNy01Ljk2LTM4LjUxLTYuOTNjLTExLjU5LS43OS0yNC4xNy0uNTgtMzUuMTEgMS41MWMtOS42MyAxLjg0LTE4LjU5IDUuNDItMjYuMjMgMTAuMDdjLTguNDggNS4xNy0xNS4wNSAxMS44LTE5LjY1IDE5LjI3Yy02LjM2IDEwLjMzLTkuMjQgMjMuMTMtNy43NyAzNS4zOWMxLjg4IDE1LjcxIDkuNTMgMjcuNDMgMjAuMTYgMzUuNTRjOC4yIDYuMjQgMTcuNjMgMTAuMzMgMjcuNzMgMTIuNjdjNy42NCAxLjc3IDE1LjU3IDIuNTEgMjMuMjIgMi43OWMxMC40NC4zOSAyMC42My0uMTQgMzAuMTgtMS45MmM4LjAzLTEuNDkgMTUuNi0zLjg1IDIyLjQyLTcuMzJjNi43NC0zLjQzIDEyLjc0LTcuOTggMTcuNTMtMTMuOGM1LjctNi45MyA5Ljc0LTE1LjMyIDExLjYxLTI0Ljg1YzIuMjUtMTEuNSAxLjI4LTIzLjc1LTMuMjctMzUuMDNjLTMuNjUtOS4wNS05LjM1LTE2LjgtMTYuNzItMjIuNjVjLTEuNjItMS4yOS0zLjMxLTIuNTEtNS4wOC0zLjY1bC0uNTEtLjA5Wm0tMzAuNjcgNzkuNjNjLTguMzggMi4xLTE3LjEyIDIuNTUtMjUuNzggMS44NmMtOC42NS0uNjktMTcuMDQtMi44My0yNC41LTYuNzVjLTYuMDEtMy4xNS0xMS4yNC03LjQ5LTE1LjA5LTEyLjgyYy00Ljg4LTYuNzYtNy4zNS0xNC44OC02Ljk4LTIzLjE3Yy4yNi01Ljc1IDEuNjUtMTEuMzYgNC4zMy0xNi40YzIuNjItNC45MyA2LjM4LTkuMjMgMTEuMTEtMTIuNTZjNS4yNS0zLjcgMTEuMzMtNi4yMyAxNy44My03LjUyYzcuNzMtMS41NCAxNS44NC0xLjU0IDIzLjU2LS43NWM4Ljg1LjkgMTcuMzIgMi45IDI0Ljc1IDYuMzFjNS40NSAyLjUgMTAuMjggNS44NyAxNC4wNSAxMC4wOGM0LjQ5IDUuMDIgNy41NCAxMS4yIDguNjQgMTcuODljMS40NSA4Ljg0LS4xIDE3LjktNC40OCAyNS42N2MtMy45IDYuOTMtOS42MSAxMi42LTE2LjYzIDE2LjM5Yy0zLjQxIDEuODQtNy4wNCAzLjI4LTEwLjgxIDQuMjdaIi8+PHBhdGggZmlsbD0iI0RGMDA2NyIgZD0iTTk2LjgyIDIwNi4yOGMtNy41OC0xLjY4LTE0LjktNC4zNi0yMS42Mi04LjM1Yy05LjU1LTUuNjctMTcuNDctMTMuOTctMjIuNzQtMjMuOTFjLTYuNDItMTIuMTMtOC42Mi0yNi40MS02LjI1LTQwLjE5YzEuNzctMTAuMjggNS45LTIwLjA2IDEyLjU2LTI4LjE2YzYuNTYtNy45OCAxNS4yMi0xNC4xNCAyNC45Mi0xOC4wNWM3Ljk5LTMuMjIgMTYuNjEtNS4xMSAyNS40NC01LjgxYzExLjI0LS44OSAyMi44OS0uMDYgMzMuNTkgMi40OGM4LjQzIDIgMTYuMzggNS4xMSAyMy4zMiA5LjM3YzMuNzEgMi4yOCA3LjEyIDQuOTEgMTAuMTggNy44OWMtMTMuODctLjUtMjcuMzIgMS4xOS0zOS40OSA1Ljk2Yy0xMS4xNiA0LjM4LTIwLjcyIDExLjUxLTI3Ljg4IDIwLjY3Yy01LjQyIDYuOTMtOS4yMiAxNS4xLTEwLjg4IDIzLjc5Yy0yLjE3IDExLjM2LS42NyAyMy4zNCA0LjggMzMuNjJjNC4yOCA4LjA1IDEwLjY2IDE0Ljc3IDE4LjU2IDE5LjQ0Yy4zNi4yMS43Mi40MS4xLjYybC0yNC41MS4yNloiLz48L3N2Zz4=",
  },
];

const Services = [
  {
    serviceIcon: Code,
    translationKey: "webDevelopment",
    href: "/agence-creation-site-web",
  },
  {
    serviceIcon: Smartphone,
    translationKey: "mobileAppDevelopment",
    href: "/developpement-application-mobile",
  },
  {
    serviceIcon: Megaphone,
    translationKey: "digitalMarketing",
    href: "/marketing-digital",
  },
  {
    serviceIcon: Layout,
    translationKey: "uiUxDesign",
    href: "/web-et-mobile-design",
  },
  {
    serviceIcon: Cloud,
    translationKey: "saasDevelopment",
    href: "/developpement-saas",
  },
  {
    serviceIcon: Zap,
    translationKey: "aiAutomation",
    href: "/agence-automatisation-ia",
  },
  {
    serviceIcon: ShoppingCart,
    translationKey: "ecommerceDevelopment",
    href: "/developpement-ecommerce",
  },
];

const steps = [
  {
    icon: <Brain className="text-white" size={80} />,
    translationKey: "vision",
  },
  {
    icon: <Target className="text-white" size={80} />,
    translationKey: "planning",
  },
  {
    icon: <Code className="text-white" size={80} />,
    translationKey: "development",
  },
  {
    icon: <Rocket className="text-white" size={80} />,
    translationKey: "launch",
  },
  {
    icon: <RefreshCw className="text-white" size={80} />,
    translationKey: "support",
  },
];

const WhyUs = [
  {
    serviceIcon: "Users",
    translationKey: "team",
  },
  {
    serviceIcon: "Code",
    translationKey: "technology",
  },
  {
    serviceIcon: "Smile",
    translationKey: "approach",
  },
  {
    serviceIcon: "TrendingUp",
    translationKey: "track",
  },
  {
    serviceIcon: "MessageCircle",
    translationKey: "communication",
  },
  {
    serviceIcon: "Clock",
    translationKey: "delivery",
  },
];

const portfolioItems = [
  {
    image: "/portfolio/website1.png",
    src: "https://www.privatehonors.com/",
    translationName: "home.portfolio.categories.private.name",
    translationContent: "home.portfolio.categories.private.content",
    translationdesign: "home.portfolio.categories.private.design",
    translationfrontendDevelopment:
      "home.portfolio.categories.private.frontendDevelopment",
    translationbackendDevelopment:
      "home.portfolio.categories.private.backendDevelopment",
    translationDatabase: "home.portfolio.categories.private.database",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/home-app.webp",
    src: ["/portfolio/home-app.webp"],
    translationName: "home.portfolio.categories.aviator.name",
    translationContent: "home.portfolio.categories.aviator.content",
    translationdesign: "home.portfolio.categories.aviator.design",
    translationfrontendDevelopment:
      "home.portfolio.categories.aviator.frontendDevelopment",
    translationbackendDevelopment:
      "home.portfolio.categories.aviator.backendDevelopment",
    translationDatabase: "home.portfolio.categories.aviator.database",
    translationKey: "appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/seo-agence-ecommerce.png",
    src: ["/portfolio/seo-agence-ecommerce.png"],
    translationName: "home.portfolio.categories.ecommerce.name",
    translationContent: "home.portfolio.categories.ecommerce.content",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];

const myCompanyLogos = [
  "/client/client.jpeg",
  "/client/client2.jpeg",
  "/client/client3.jpeg",
  "/client/client4.jpeg",
  "/client/client5.jpeg",
  "/client/client6.jpeg",
  "/client/client7.jpeg",
  "/client/client8.jpeg",
  "/client/client9.jpeg",
  "/client/client10.jpeg",
  "/client/client11.jpeg",
  "/client/client12.jpeg",
  "/client/13.jpeg",
  "/client/14.jpeg",
  "/client/15.jpeg",
  "/client/16.jpeg",
  "/client/17.jpeg",
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const currentLocale = i18n?.language || "fr";
  const localePath = currentLocale === "fr" ? "" : `/${currentLocale}`;
  const pageUrl = `${siteUrl}${localePath || ""}`;

  const faqItems = useMemo(() => {
    const items = t("home.faq.items", { returnObjects: true });
    if (!items || typeof items !== "object") return [];
    return Object.keys(items).map((key) => ({
      question: t(`home.faq.items.${key}.question`),
      answer: t(`home.faq.items.${key}.answer`),
    }));
  }, [t]);

  const faqSchema = useMemo(() => {
    if (!faqItems.length) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
      mainEntityOfPage: pageUrl,
    };
  }, [faqItems, pageUrl]);

  const localizedProcessSteps = useMemo(() => {
    return steps.map((step, index) => ({
      position: index + 1,
      name: t(`home.process.steps.${step.translationKey}.title`, step.translationKey),
      text: t(
        `home.process.steps.${step.translationKey}.description`,
        step.translationKey
      ),
    }));
  }, [t]);

  const processTitle = t("home.process.title", "Notre processus");
  const processDescription = t(
    "home.process.description",
    t("home.process.subtitle", "Découvrez notre méthodologie collaborative.")
  );

  const howToSchema = useMemo(() => {
    if (!localizedProcessSteps.length) return null;
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: processTitle,
      description: processDescription,
      url: pageUrl,
      inLanguage: currentLocale,
      step: localizedProcessSteps.map((step) => ({
        "@type": "HowToStep",
        position: step.position,
        name: step.name,
        text: step.text,
      })),
    };
  }, [localizedProcessSteps, processTitle, processDescription, pageUrl, currentLocale]);

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <div>
      {/* Hero Section */}
      <Hero technologies={TECHNOLOGIES} />
      <LogoCarousel logos={myCompanyLogos} />

      {/* About Section - Qui sommes-nous */}
      <div className="my-16 mx-5 bg-white p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center font-bold  mb-8">
            <span className="text-blue-600 bg-blue-200 ml-2 p-1.5 rounded-2xl">
              {t("home.about.title")}
            </span>
          </h2>
          <p className="text-xl text-center text-gray-700 mb-6">
            {t("home.about.description")}
          </p>
          <p className="text-lg text-center text-gray-600 mb-8">
            {t("home.about.mission")}
          </p>

          {/* Values */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              {t("home.about.valuesTitle")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg">
                <Lightbulb className="text-blue-600 w-8 h-8 mb-2" />
                <span className="text-blue-600 font-semibold text-center">
                  {t("home.about.values.innovation")}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg">
                <UserCheck className="text-blue-600 w-8 h-8 mb-2" />
                <span className="text-blue-600 font-semibold text-center">
                  {t("home.about.values.availability")}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg">
                <Eye className="text-blue-600 w-8 h-8 mb-2" />
                <span className="text-blue-600 font-semibold text-center">
                  {t("home.about.values.transparency")}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg">
                <Award className="text-blue-600 w-8 h-8 mb-2" />
                <span className="text-blue-600 font-semibold text-center">
                  {t("home.about.values.excellence")}
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-center text-gray-600 mt-10">
            {t("home.about.experience")}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-16 pb-16 bg-gray-50">
        <h2
          id="services"
          className="text-4xl px-2 text-center font-bold text-gray-800"
        >
          {t("home.services.title")}
          <span className="text-blue-600 bg-blue-200 ml-2 p-1.5 rounded-2xl">
            {t("home.services.titleHighlight")}
          </span>
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 max-w-6xl">
          {Services.map((service, index) => {
            const Icon = service.serviceIcon;
            const key = `home.services.items.${service.translationKey}`;
            const expertise = t(`${key}.expertise`, { returnObjects: true });

            return (
              <div
                key={index}
                className="flex flex-col p-6 shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-2xl border border-gray-200 bg-white"
              >
                <Link href={service?.href} className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl">
                      <Icon className="text-blue-600 w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {t(`${key}.name`)}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t(`${key}.description`)}
                  </p>
                  <div className="mt-auto">
                    <p className="text-blue-600 font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      {t(`${key}.expertiseTitle`)}
                    </p>
                    <ul className="space-y-2.5">
                      {Array.isArray(expertise) &&
                        expertise.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-gray-600 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Process Section */}
      <HowAgencyWorks steps={steps} namespace="home" />

      {/* Differentiators Section - Nos atouts différenciants */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center font-bold text-gray-800 mb-12">
            {t("home.differentiators.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Multi-sector Experience */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]  border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-200 rounded-xl">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("home.differentiators.items.experience.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                {t("home.differentiators.items.experience.description")}
              </p>
              <ul className="space-y-2.5">
                {t("home.differentiators.items.experience.sectors", {
                  returnObjects: true,
                }).map((sector, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-gray-600 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborative Approach */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]  border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-200 rounded-xl">
                  <Handshake className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("home.differentiators.items.approach.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                {t("home.differentiators.items.approach.description")}
              </p>
              <ul className="space-y-2.5">
                {t("home.differentiators.items.approach.points", {
                  returnObjects: true,
                }).map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-gray-600 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* End-to-End Support */}
            <div className="bg-purple-50 p-6 rounded-2xl shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)]  border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-200 rounded-xl">
                  <HeartHandshake className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t("home.differentiators.items.support.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                {t("home.differentiators.items.support.description")}
              </p>
              <ul className="space-y-2.5">
                {t("home.differentiators.items.support.steps", {
                  returnObjects: true,
                }).map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-gray-600 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with Us Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("home.whyUs.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("home.whyUs.titleHighlight")}
          </span>{" "}
          {t("home.whyUs.titleEnd")}
        </h2>
        <p className="text-xl text-center font-medium text-gray-600 mt-4">
          {t("home.whyUs.subtitle")}
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {WhyUs.map((service, index) => {
            const Icon = {
              Users,
              Code,
              Smile,
              TrendingUp,
              MessageCircle,
              Clock,
            }[service.serviceIcon];
            const key = `home.whyUs.reasons.${service.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("home.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("home.portfolio.titleHighlight")}
          </span>
        </h2>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-2 ${item.bgColor}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl -mr-1 overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={t(item?.translationName)}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(item?.translationName)}
                </h3>
                <button
                  onClick={() => openModal(item)}
                  className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PortfolioModal
        item={selectedModal}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        t={t}
      />
      {/* Image Carousel Section */}
      <ImageCarousel />

      <Feedback />
      {/* FAQs Section */}
      <FAQs faqData={faqItems} />

      {/* Contact Section */}
      <FormCTA />
    </div>
    </>
  );
}
