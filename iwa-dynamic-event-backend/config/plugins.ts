export default ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          },
          region: env('AWS_REGION'),
        },
        params: {
          Bucket: env('AWS_BUCKET'),
          ACL: undefined, 
        },
        baseUrl: env('AWS_BUCKET_BASE_URL'),
      },
    },
  },

  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      playgroundAlways: true,
      defaultLimit: 100,
      maxLimit: 250,
      apolloServer: {
  introspection: true,
  csrfPrevention: false,
  cacheControl: { defaultMaxAge: 300 },
},
    },
  },
  ckeditor5: {
    enabled: true,
    config: {
      editor: {
        plugins: ['HtmlEmbed'],
        toolbar: [
          'htmlEmbed',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'blockQuote',
        ],
        htmlEmbed: { showPreviews: true },
        htmlSupport: {
          allow: [
            {
              name: /.*/,
              attributes: true,
              classes: true,
              styles: true,
            },
          ],
        },
      },
    },
  },
});