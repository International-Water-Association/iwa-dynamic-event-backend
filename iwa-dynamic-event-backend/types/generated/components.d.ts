import type { Schema, Struct } from '@strapi/strapi';

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
      'component.button': ComponentButton;
      'component.cards': ComponentCards;
      'component.image-text-block': ComponentImageTextBlock;
      'component.program-details': ComponentProgramDetails;
      'component.sessions': ComponentSessions;
      'component.speakers': ComponentSpeakers;
      'component.why-attend-cards': ComponentWhyAttendCards;
    }
  }
}
