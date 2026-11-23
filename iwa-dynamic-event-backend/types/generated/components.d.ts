import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentAdvisoryCommitee extends Struct.ComponentSchema {
  collectionName: 'components_component_advisory_commitees';
  info: {
    displayName: 'AdvisoryCommitee';
  };
  attributes: {
    description: Schema.Attribute.Text;
    member_Details: Schema.Attribute.Component<'component.member', true>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.Text;
  };
}

export interface ComponentCards extends Struct.ComponentSchema {
  collectionName: 'components_component_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentCommittee extends Struct.ComponentSchema {
  collectionName: 'components_component_committees';
  info: {
    displayName: 'committee';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentImageText extends Struct.ComponentSchema {
  collectionName: 'components_component_image_texts';
  info: {
    displayName: 'imageText';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.Enumeration<['left', 'right']>;
  };
}

export interface ComponentImageTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_component_image_text_blocks';
  info: {
    displayName: 'image_text_block';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentMember extends Struct.ComponentSchema {
  collectionName: 'components_component_members';
  info: {
    displayName: 'member';
  };
  attributes: {
    company_Details: Schema.Attribute.String;
    country: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentProgramDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_program_details';
  info: {
    displayName: 'program_details';
  };
  attributes: {
    endTime: Schema.Attribute.Time;
    speaker_list: Schema.Attribute.Text;
    startTime: Schema.Attribute.Time;
    title: Schema.Attribute.Text;
    topics: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    type: Schema.Attribute.Enumeration<
      [
        'Registration & Networking Breakfast',
        'Keynote',
        'Panel',
        'Break',
        'Lunch',
        'Reception',
      ]
    >;
  };
}

export interface ComponentRateCards extends Struct.ComponentSchema {
  collectionName: 'components_component_rate_cards';
  info: {
    displayName: 'rateCards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'component.rates', true>;
    customdate: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface ComponentRates extends Struct.ComponentSchema {
  collectionName: 'components_component_rates';
  info: {
    displayName: 'rates';
  };
  attributes: {
    rate: Schema.Attribute.String;
    typeOfMembership: Schema.Attribute.Text;
  };
}

export interface ComponentSessions extends Struct.ComponentSchema {
  collectionName: 'components_component_sessions';
  info: {
    displayName: 'sessions';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keypoints: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    speaker: Schema.Attribute.Component<'component.speakers', true>;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentSpeakers extends Struct.ComponentSchema {
  collectionName: 'components_component_speakers';
  info: {
    displayName: 'speakers';
  };
  attributes: {
    designation: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface ComponentSponsorImageWidget extends Struct.ComponentSchema {
  collectionName: 'components_component_sponsor_image_widgets';
  info: {
    displayName: 'Sponsor Image Widget';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentWhyAttendCards extends Struct.ComponentSchema {
  collectionName: 'components_component_why_attend_cards';
  info: {
    displayName: 'why_attend_cards';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.advisory-commitee': ComponentAdvisoryCommitee;
      'component.button': ComponentButton;
      'component.cards': ComponentCards;
      'component.committee': ComponentCommittee;
      'component.image-text': ComponentImageText;
      'component.image-text-block': ComponentImageTextBlock;
      'component.member': ComponentMember;
      'component.program-details': ComponentProgramDetails;
      'component.rate-cards': ComponentRateCards;
      'component.rates': ComponentRates;
      'component.sessions': ComponentSessions;
      'component.speakers': ComponentSpeakers;
      'component.sponsor-image-widget': ComponentSponsorImageWidget;
      'component.why-attend-cards': ComponentWhyAttendCards;
    }
  }
}
