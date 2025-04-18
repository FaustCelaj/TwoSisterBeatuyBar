/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    'service-categories': ServiceCategory;
    services: Service;
    'faq-categories': FaqCategory;
    faqs: Faq;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'service-categories': ServiceCategoriesSelect<false> | ServiceCategoriesSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    'faq-categories': FaqCategoriesSelect<false> | FaqCategoriesSelect<true>;
    faqs: FaqsSelect<false> | FaqsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'spa-settings': SpaSetting;
  };
  globalsSelect: {
    'spa-settings': SpaSettingsSelect<false> | SpaSettingsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  /**
   * Important for SEO and accessibility
   */
  alt: string;
  caption?: string | null;
  /**
   * Categorize this image for better organization
   */
  category?: ('services' | 'facilities' | 'staff' | 'testimonials' | 'branding' | 'other') | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    featured?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-categories".
 */
export interface ServiceCategory {
  id: string;
  name: string;
  description?: string | null;
  /**
   * Maximum 70 characters for optimal SEO (optional)
   */
  metaTitle?: string | null;
  /**
   * Maximum 160 characters for optimal SEO (optional)
   */
  metaDescription?: string | null;
  /**
   * Lower numbers will be displayed first
   */
  displayOrder?: number | null;
  /**
   * Uncheck to hide this category on the site
   */
  isActive?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  title: string;
  /**
   * The category this service belongs to
   */
  category: string | ServiceCategory;
  /**
   * Brief description for listings (max 250 characters)
   */
  description: string;
  price: number;
  /**
   * Number of hours (e.g., 1 for 1 hour)
   */
  durationHours: number;
  /**
   * Additional minutes
   */
  durationMinutes: '0' | '15' | '30' | '45';
  /**
   * URL to the booking software for this service
   */
  bookingLink?: string | null;
  /**
   * Thumbnail image for this service
   */
  image?: (string | null) | Media;
  /**
   * Check to mark this as a special offer
   */
  specialOffer?: boolean | null;
  /**
   * Check to mark this as a popular service
   */
  popular?: boolean | null;
  /**
   * Maximum 70 characters for optimal SEO (optional)
   */
  metaTitle?: string | null;
  /**
   * Maximum 160 characters for optimal SEO (optional)
   */
  metaDescription?: string | null;
  /**
   * Comma separated keywords for SEO (optional)
   */
  metaKeywords?: string | null;
  /**
   * Lower numbers will be displayed first
   */
  displayOrder?: number | null;
  /**
   * Uncheck to hide this service on the site
   */
  isActive?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faq-categories".
 */
export interface FaqCategory {
  id: string;
  name: string;
  description?: string | null;
  /**
   * Select services this FAQ category relates to (leave empty if general)
   */
  services?: (string | ServiceCategory)[] | null;
  /**
   * Check if this is a general FAQ category (not tied to specific services)
   */
  isGeneral?: boolean | null;
  /**
   * Lower numbers will be displayed first
   */
  displayOrder?: number | null;
  /**
   * Uncheck to hide this category on the site
   */
  isActive?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faqs".
 */
export interface Faq {
  id: string;
  question: string;
  answer: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  category: string | FaqCategory;
  /**
   * Lower numbers will be displayed first
   */
  displayOrder?: number | null;
  /**
   * Uncheck to hide this FAQ on the site
   */
  isActive?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'service-categories';
        value: string | ServiceCategory;
      } | null)
    | ({
        relationTo: 'services';
        value: string | Service;
      } | null)
    | ({
        relationTo: 'faq-categories';
        value: string | FaqCategory;
      } | null)
    | ({
        relationTo: 'faqs';
        value: string | Faq;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  caption?: T;
  category?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        featured?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-categories_select".
 */
export interface ServiceCategoriesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  metaTitle?: T;
  metaDescription?: T;
  displayOrder?: T;
  isActive?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  title?: T;
  category?: T;
  description?: T;
  price?: T;
  durationHours?: T;
  durationMinutes?: T;
  bookingLink?: T;
  image?: T;
  specialOffer?: T;
  popular?: T;
  metaTitle?: T;
  metaDescription?: T;
  metaKeywords?: T;
  displayOrder?: T;
  isActive?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faq-categories_select".
 */
export interface FaqCategoriesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  services?: T;
  isGeneral?: T;
  displayOrder?: T;
  isActive?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faqs_select".
 */
export interface FaqsSelect<T extends boolean = true> {
  question?: T;
  answer?: T;
  category?: T;
  displayOrder?: T;
  isActive?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "spa-settings".
 */
export interface SpaSetting {
  id: string;
  siteTitle: string;
  /**
   * Default title tag for SEO (70 characters max)
   */
  metaTitle?: string | null;
  /**
   * Default meta description for SEO (160 characters max)
   */
  metaDescription?: string | null;
  logo?: (string | null) | Media;
  contactInfo?: {
    phone?: string | null;
    email?: string | null;
    address?: string | null;
  };
  socialMedia?:
    | {
        platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'pinterest' | 'youtube';
        url: string;
        id?: string | null;
      }[]
    | null;
  businessHours?:
    | {
        day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
        isOpen?: boolean | null;
        openTime?: string | null;
        closeTime?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "spa-settings_select".
 */
export interface SpaSettingsSelect<T extends boolean = true> {
  siteTitle?: T;
  metaTitle?: T;
  metaDescription?: T;
  logo?: T;
  contactInfo?:
    | T
    | {
        phone?: T;
        email?: T;
        address?: T;
      };
  socialMedia?:
    | T
    | {
        platform?: T;
        url?: T;
        id?: T;
      };
  businessHours?:
    | T
    | {
        day?: T;
        isOpen?: T;
        openTime?: T;
        closeTime?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}