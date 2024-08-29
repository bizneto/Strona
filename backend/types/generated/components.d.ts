import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogComponentsAdmission extends Schema.Component {
  collectionName: 'components_blog_components_admissions';
  info: {
    displayName: 'Admission';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

export interface BlogComponentsArticle extends Schema.Component {
  collectionName: 'components_blog_components_articles';
  info: {
    displayName: 'Article';
    icon: 'check';
  };
  attributes: {
    articleAdmission: Attribute.Text;
    articleHeader: Attribute.String;
    image: Attribute.Media;
    articleMain: Attribute.Blocks;
  };
}

export interface BlogComponentsHeader extends Schema.Component {
  collectionName: 'components_blog_components_headers';
  info: {
    displayName: 'Header';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    category: Attribute.Enumeration<
      [
        'Aktualno\u015Bci',
        'Biznes',
        'Finanse',
        'Marketing',
        'Technologie',
        'Wydarzenia'
      ]
    >;
  };
}

export interface BlogComponentsThumbnail extends Schema.Component {
  collectionName: 'components_blog_components_thumbnails';
  info: {
    displayName: 'Thumbnail';
    icon: 'chartBubble';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentBigImage extends Schema.Component {
  collectionName: 'components_component_big_images';
  info: {
    displayName: 'BigImage';
    icon: 'earth';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentGoal extends Schema.Component {
  collectionName: 'components_component_goals';
  info: {
    displayName: 'Goal';
    icon: 'cog';
  };
  attributes: {
    longText: Attribute.Text;
  };
}

export interface ComponentHeader extends Schema.Component {
  collectionName: 'components_component_headers';
  info: {
    displayName: 'header';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    client: Attribute.String;
    date: Attribute.String;
    services: Attribute.String;
    industry: Attribute.String;
    shortDescription: Attribute.String;
  };
}

export interface ComponentImagesPair extends Schema.Component {
  collectionName: 'components_component_images_pairs';
  info: {
    displayName: 'ImagesPair';
    icon: 'grid';
  };
  attributes: {
    imagesPair: Attribute.Media;
  };
}

export interface ComponentIntro extends Schema.Component {
  collectionName: 'components_component_intros';
  info: {
    displayName: 'Intro';
    icon: 'cursor';
  };
  attributes: {
    sectionTitle: Attribute.String;
    longText: Attribute.Text;
  };
}

export interface ComponentMiniThumbnail extends Schema.Component {
  collectionName: 'components_component_mini_thumbnails';
  info: {
    displayName: 'miniThumbnail';
    icon: 'arrowDown';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentOpinion extends Schema.Component {
  collectionName: 'components_component_opinions';
  info: {
    displayName: 'Opinion';
    icon: 'crown';
  };
  attributes: {
    opinionAuthor: Attribute.String;
    opinionAuthorPostion: Attribute.String;
    opinion: Attribute.Text;
  };
}

export interface ComponentSmallImage extends Schema.Component {
  collectionName: 'components_component_small_images';
  info: {
    displayName: 'SmallImage';
    icon: 'brush';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentThumbnail extends Schema.Component {
  collectionName: 'components_component_thumbnails';
  info: {
    displayName: 'Thumbnail';
    icon: 'alien';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface OfferItemComponentsOfferItem extends Schema.Component {
  collectionName: 'components_offer_item_components_offer_items';
  info: {
    displayName: 'OfferItem';
    icon: 'bulletList';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Text: Attribute.Text;
    ButtonText: Attribute.String;
  };
}

export interface OfferItemComponentsProcesItem extends Schema.Component {
  collectionName: 'components_offer_item_components_proces_items';
  info: {
    displayName: 'ProcessItem';
    icon: 'write';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Text: Attribute.Text;
  };
}

export interface OfferItemComponentsProjekt extends Schema.Component {
  collectionName: 'components_offer_item_components_projekts';
  info: {
    displayName: 'Projekt';
    icon: 'alien';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
  };
}

export interface OfferItemComponentsQuestionItem extends Schema.Component {
  collectionName: 'components_offer_item_components_question_items';
  info: {
    displayName: 'QuestionItem';
    icon: 'apps';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
  };
}

export interface OfferItemComponentsSlider extends Schema.Component {
  collectionName: 'components_offer_item_components_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
  };
  attributes: {
    images: Attribute.Media & Attribute.Required;
  };
}

export interface OfferItemComponentsValue extends Schema.Component {
  collectionName: 'components_offer_item_components_values';
  info: {
    displayName: 'Value';
    icon: 'plus';
  };
  attributes: {
    Header: Attribute.String;
    Text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-components.admission': BlogComponentsAdmission;
      'blog-components.article': BlogComponentsArticle;
      'blog-components.header': BlogComponentsHeader;
      'blog-components.thumbnail': BlogComponentsThumbnail;
      'component.big-image': ComponentBigImage;
      'component.goal': ComponentGoal;
      'component.header': ComponentHeader;
      'component.images-pair': ComponentImagesPair;
      'component.intro': ComponentIntro;
      'component.mini-thumbnail': ComponentMiniThumbnail;
      'component.opinion': ComponentOpinion;
      'component.small-image': ComponentSmallImage;
      'component.thumbnail': ComponentThumbnail;
      'offer-item-components.offer-item': OfferItemComponentsOfferItem;
      'offer-item-components.proces-item': OfferItemComponentsProcesItem;
      'offer-item-components.projekt': OfferItemComponentsProjekt;
      'offer-item-components.question-item': OfferItemComponentsQuestionItem;
      'offer-item-components.slider': OfferItemComponentsSlider;
      'offer-item-components.value': OfferItemComponentsValue;
    }
  }
}
