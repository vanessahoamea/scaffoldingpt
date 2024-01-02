// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutPageDocumentDataSlicesSlice =
  | SiteBannerSlice
  | AboutTabsSlice
  | OurValuesSectionSlice
  | SeparatorSlice
  | TextSectionSlice
  | CallToActionSlice;

/**
 * Content for About Page documents
 */
interface AboutPageDocumentData {
  /**
   * Slice Zone field in *About Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutPageDocumentDataSlicesSlice> /**
   * Meta Description field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About Page document from Prismic
 *
 * - **API ID**: `about_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AboutPageDocumentData>,
    "about_page",
    Lang
  >;

type ContactPageDocumentDataSlicesSlice =
  | MapSlice
  | RequestOfferSectionSlice
  | ContactUsSectionSlice
  | SiteBannerSlice;

/**
 * Content for Contact Page documents
 */
interface ContactPageDocumentData {
  /**
   * Slice Zone field in *Contact Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Contact Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Contact Page document from Prismic
 *
 * - **API ID**: `contact_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactPageDocumentData>,
    "contact_page",
    Lang
  >;

/**
 * Content for Counter documents
 */
interface CounterDocumentData {
  /**
   * Count field in *Counter*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: counter.count
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  count: prismic.NumberField;

  /**
   * Text field in *Counter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: counter.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Unit field in *Counter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: counter.unit
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  unit: prismic.KeyTextField;
}

/**
 * Counter document from Prismic
 *
 * - **API ID**: `counter`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CounterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CounterDocumentData>,
    "counter",
    Lang
  >;

type HomePageDocumentDataSlicesSlice =
  | ReviewsSectionSlice
  | WhatWeDoSectionSlice
  | AboutUsSectionSlice
  | SiteBannerSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

/**
 * Content for Review documents
 */
interface ReviewDocumentData {
  /**
   * Name field in *Review*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: review.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Job Title field in *Review*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: review.job_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  job_title: prismic.KeyTextField;

  /**
   * Rating field in *Review*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: review.rating
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  rating: prismic.NumberField;

  /**
   * Content field in *Review*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: review.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Review document from Prismic
 *
 * - **API ID**: `review`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ReviewDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ReviewDocumentData>, "review", Lang>;

/**
 * Content for Tab documents
 */
interface TabDocumentData {
  /**
   * Title field in *Tab*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tab.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Tab*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tab.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Tab document from Prismic
 *
 * - **API ID**: `tab`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TabDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TabDocumentData>, "tab", Lang>;

/**
 * Content for Value documents
 */
interface ValueDocumentData {
  /**
   * Image field in *Value*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: value.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Value*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: value.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Value*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: value.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Value document from Prismic
 *
 * - **API ID**: `value`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ValueDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ValueDocumentData>, "value", Lang>;

export type AllDocumentTypes =
  | AboutPageDocument
  | ContactPageDocument
  | CounterDocument
  | HomePageDocument
  | ReviewDocument
  | TabDocument
  | ValueDocument;

/**
 * Primary content in *AboutTabs → Primary*
 */
export interface AboutTabsSliceDefaultPrimary {
  /**
   * Title field in *AboutTabs → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_tabs.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *AboutTabs → Items*
 */
export interface AboutTabsSliceDefaultItem {
  /**
   * Tab field in *AboutTabs → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: about_tabs.items[].tab
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tab: prismic.ContentRelationshipField<"tab">;
}

/**
 * Default variation for AboutTabs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTabsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutTabsSliceDefaultPrimary>,
  Simplify<AboutTabsSliceDefaultItem>
>;

/**
 * Slice variation for *AboutTabs*
 */
type AboutTabsSliceVariation = AboutTabsSliceDefault;

/**
 * AboutTabs Shared Slice
 *
 * - **API ID**: `about_tabs`
 * - **Description**: AboutTabs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTabsSlice = prismic.SharedSlice<
  "about_tabs",
  AboutTabsSliceVariation
>;

/**
 * Primary content in *AboutUsSection → Primary*
 */
export interface AboutUsSectionSliceDefaultPrimary {
  /**
   * Title field in *AboutUsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *AboutUsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_section.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *AboutUsSection → Items*
 */
export interface AboutUsSectionSliceDefaultItem {
  /**
   * Counter field in *AboutUsSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_section.items[].counter
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  counter: prismic.ContentRelationshipField<"counter">;
}

/**
 * Default variation for AboutUsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSectionSliceDefaultPrimary>,
  Simplify<AboutUsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *AboutUsSection*
 */
type AboutUsSectionSliceVariation = AboutUsSectionSliceDefault;

/**
 * AboutUsSection Shared Slice
 *
 * - **API ID**: `about_us_section`
 * - **Description**: AboutUsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSectionSlice = prismic.SharedSlice<
  "about_us_section",
  AboutUsSectionSliceVariation
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Button Text field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *ContactUsSection → Primary*
 */
export interface ContactUsSectionSliceDefaultPrimary {
  /**
   * Title field in *ContactUsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Address field in *ContactUsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_section.primary.address
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * E-mail field in *ContactUsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_section.primary.email
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  email: prismic.RichTextField;

  /**
   * Phone field in *ContactUsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us_section.primary.phone
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  phone: prismic.RichTextField;
}

/**
 * Default variation for ContactUsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactUsSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactUsSection*
 */
type ContactUsSectionSliceVariation = ContactUsSectionSliceDefault;

/**
 * ContactUsSection Shared Slice
 *
 * - **API ID**: `contact_us_section`
 * - **Description**: ContactUsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSectionSlice = prismic.SharedSlice<
  "contact_us_section",
  ContactUsSectionSliceVariation
>;

/**
 * Primary content in *Map → Primary*
 */
export interface MapSliceDefaultPrimary {
  /**
   * Place ID field in *Map → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: map.primary.place_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  place_id: prismic.KeyTextField;
}

/**
 * Default variation for Map Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MapSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MapSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Map*
 */
type MapSliceVariation = MapSliceDefault;

/**
 * Map Shared Slice
 *
 * - **API ID**: `map`
 * - **Description**: Map
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MapSlice = prismic.SharedSlice<"map", MapSliceVariation>;

/**
 * Primary content in *OurValuesSection → Primary*
 */
export interface OurValuesSectionSliceDefaultPrimary {
  /**
   * Title field in *OurValuesSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_values_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *OurValuesSection → Items*
 */
export interface OurValuesSectionSliceDefaultItem {
  /**
   * Value field in *OurValuesSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: our_values_section.items[].value
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  value: prismic.ContentRelationshipField<"value">;
}

/**
 * Default variation for OurValuesSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurValuesSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OurValuesSectionSliceDefaultPrimary>,
  Simplify<OurValuesSectionSliceDefaultItem>
>;

/**
 * Slice variation for *OurValuesSection*
 */
type OurValuesSectionSliceVariation = OurValuesSectionSliceDefault;

/**
 * OurValuesSection Shared Slice
 *
 * - **API ID**: `our_values_section`
 * - **Description**: OurValuesSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurValuesSectionSlice = prismic.SharedSlice<
  "our_values_section",
  OurValuesSectionSliceVariation
>;

/**
 * Primary content in *RequestOfferSection → Primary*
 */
export interface RequestOfferSectionSliceDefaultPrimary {
  /**
   * Title field in *RequestOfferSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: request_offer_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *RequestOfferSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: request_offer_section.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RequestOfferSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RequestOfferSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RequestOfferSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RequestOfferSection*
 */
type RequestOfferSectionSliceVariation = RequestOfferSectionSliceDefault;

/**
 * RequestOfferSection Shared Slice
 *
 * - **API ID**: `request_offer_section`
 * - **Description**: RequestOfferSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RequestOfferSectionSlice = prismic.SharedSlice<
  "request_offer_section",
  RequestOfferSectionSliceVariation
>;

/**
 * Primary content in *ReviewsSection → Primary*
 */
export interface ReviewsSectionSliceDefaultPrimary {
  /**
   * Title field in *ReviewsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *ReviewsSection → Items*
 */
export interface ReviewsSectionSliceDefaultItem {
  /**
   * Review field in *ReviewsSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews_section.items[].review
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  review: prismic.ContentRelationshipField<"review">;
}

/**
 * Default variation for ReviewsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ReviewsSectionSliceDefaultPrimary>,
  Simplify<ReviewsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *ReviewsSection*
 */
type ReviewsSectionSliceVariation = ReviewsSectionSliceDefault;

/**
 * ReviewsSection Shared Slice
 *
 * - **API ID**: `reviews_section`
 * - **Description**: ReviewsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsSectionSlice = prismic.SharedSlice<
  "reviews_section",
  ReviewsSectionSliceVariation
>;

/**
 * Default variation for Separator Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SeparatorSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Separator*
 */
type SeparatorSliceVariation = SeparatorSliceDefault;

/**
 * Separator Shared Slice
 *
 * - **API ID**: `separator`
 * - **Description**: Separator
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SeparatorSlice = prismic.SharedSlice<
  "separator",
  SeparatorSliceVariation
>;

/**
 * Primary content in *SiteBanner → Primary*
 */
export interface SiteBannerSliceDefaultPrimary {
  /**
   * Image field in *SiteBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *SiteBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for SiteBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SiteBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SiteBannerSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SiteBanner → Primary*
 */
export interface SiteBannerSliceHomeSiteBannerPrimary {
  /**
   * Image field in *SiteBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: site_banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *SiteBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *SiteBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_banner.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Button Text field in *SiteBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: site_banner.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Home Site Banner variation for SiteBanner Slice
 *
 * - **API ID**: `homeSiteBanner`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SiteBannerSliceHomeSiteBanner = prismic.SharedSliceVariation<
  "homeSiteBanner",
  Simplify<SiteBannerSliceHomeSiteBannerPrimary>,
  never
>;

/**
 * Slice variation for *SiteBanner*
 */
type SiteBannerSliceVariation =
  | SiteBannerSliceDefault
  | SiteBannerSliceHomeSiteBanner;

/**
 * SiteBanner Shared Slice
 *
 * - **API ID**: `site_banner`
 * - **Description**: SiteBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SiteBannerSlice = prismic.SharedSlice<
  "site_banner",
  SiteBannerSliceVariation
>;

/**
 * Primary content in *AcknowledgementsSection → Primary*
 */
export interface TextSectionSliceDefaultPrimary {
  /**
   * Title field in *AcknowledgementsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *AcknowledgementsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_section.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for AcknowledgementsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AcknowledgementsSection*
 */
type TextSectionSliceVariation = TextSectionSliceDefault;

/**
 * AcknowledgementsSection Shared Slice
 *
 * - **API ID**: `text_section`
 * - **Description**: TextSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSectionSlice = prismic.SharedSlice<
  "text_section",
  TextSectionSliceVariation
>;

/**
 * Primary content in *WhatWeDoSection → Primary*
 */
export interface WhatWeDoSectionSliceDefaultPrimary {
  /**
   * Title field in *WhatWeDoSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *WhatWeDoSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do_section.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *WhatWeDoSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: what_we_do_section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for WhatWeDoSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhatWeDoSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WhatWeDoSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WhatWeDoSection*
 */
type WhatWeDoSectionSliceVariation = WhatWeDoSectionSliceDefault;

/**
 * WhatWeDoSection Shared Slice
 *
 * - **API ID**: `what_we_do_section`
 * - **Description**: WhatWeDoSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WhatWeDoSectionSlice = prismic.SharedSlice<
  "what_we_do_section",
  WhatWeDoSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutPageDocument,
      AboutPageDocumentData,
      AboutPageDocumentDataSlicesSlice,
      ContactPageDocument,
      ContactPageDocumentData,
      ContactPageDocumentDataSlicesSlice,
      CounterDocument,
      CounterDocumentData,
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      ReviewDocument,
      ReviewDocumentData,
      TabDocument,
      TabDocumentData,
      ValueDocument,
      ValueDocumentData,
      AllDocumentTypes,
      AboutTabsSlice,
      AboutTabsSliceDefaultPrimary,
      AboutTabsSliceDefaultItem,
      AboutTabsSliceVariation,
      AboutTabsSliceDefault,
      AboutUsSectionSlice,
      AboutUsSectionSliceDefaultPrimary,
      AboutUsSectionSliceDefaultItem,
      AboutUsSectionSliceVariation,
      AboutUsSectionSliceDefault,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      ContactUsSectionSlice,
      ContactUsSectionSliceDefaultPrimary,
      ContactUsSectionSliceVariation,
      ContactUsSectionSliceDefault,
      MapSlice,
      MapSliceDefaultPrimary,
      MapSliceVariation,
      MapSliceDefault,
      OurValuesSectionSlice,
      OurValuesSectionSliceDefaultPrimary,
      OurValuesSectionSliceDefaultItem,
      OurValuesSectionSliceVariation,
      OurValuesSectionSliceDefault,
      RequestOfferSectionSlice,
      RequestOfferSectionSliceDefaultPrimary,
      RequestOfferSectionSliceVariation,
      RequestOfferSectionSliceDefault,
      ReviewsSectionSlice,
      ReviewsSectionSliceDefaultPrimary,
      ReviewsSectionSliceDefaultItem,
      ReviewsSectionSliceVariation,
      ReviewsSectionSliceDefault,
      SeparatorSlice,
      SeparatorSliceVariation,
      SeparatorSliceDefault,
      SiteBannerSlice,
      SiteBannerSliceDefaultPrimary,
      SiteBannerSliceHomeSiteBannerPrimary,
      SiteBannerSliceVariation,
      SiteBannerSliceDefault,
      SiteBannerSliceHomeSiteBanner,
      TextSectionSlice,
      TextSectionSliceDefaultPrimary,
      TextSectionSliceVariation,
      TextSectionSliceDefault,
      WhatWeDoSectionSlice,
      WhatWeDoSectionSliceDefaultPrimary,
      WhatWeDoSectionSliceVariation,
      WhatWeDoSectionSliceDefault,
    };
  }
}