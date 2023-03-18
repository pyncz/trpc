module.exports = {
  docs: [
    {
      type: 'category',
      label: 'tRPC',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'main/introduction',
      },
      items: [
        'main/quickstart',
        'main/awesome-trpc',
        'main/example-apps',
        'main/contributing',
        'main/love',
        'main/sponsors',
      ],
    },
    {
      type: 'category',
      label: 'Backend Usage',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'tRPC server documentation',
        slug: '/server',
      },
      items: [
        'server/router',
        'server/procedures',
        'server/merging-routers',
        'server/context',
        'server/api-handler',
        'server/middlewares',
        'server/server-side-calls',
        'server/authorization',
        'server/output-validation',
        'server/infer-types',
        'server/error-handling',
        'server/error-formatting',
        'server/data-transformers',
        'server/metadata',
        'server/caching',
        {
          type: 'category',
          label: 'Adapters',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Official tRPC adapters',
            slug: '/adapters',
          },
          items: [
            'server/adapter/aws-lambda',
            'server/adapter/express',
            'server/adapter/fastify',
            'server/adapter/fetch',
            'server/adapter/standalone',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Client Usage',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'client/introduction',
      },
      items: [
        'client/setup',
        'client/aborting-procedure-calls',
        {
          type: 'category',
          label: 'Links',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'client/links/links',
          },
          items: [
            'client/links/httpLink',
            'client/links/httpBatchLink',
            'client/links/wsLink',
            'client/links/splitLink',
            'client/links/loggerLink',
          ],
        },
        'client/header',
        'client/cors',
      ],
    },
    {
      type: 'category',
      label: 'React Query Integration',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'reactjs/introduction',
      },
      items: [
        'reactjs/setup',
        'reactjs/aborting-procedure-calls',
        'reactjs/useQuery',
        'reactjs/useMutation',
        'reactjs/useInfiniteQuery',
        'reactjs/useContext',
        'reactjs/useQueries',
        'reactjs/getQueryKey',
      ],
    },
    {
      type: 'category',
      label: 'Next.js Integration',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'nextjs/introduction',
      },
      items: [
        'nextjs/setup',
        'nextjs/ssr',
        'nextjs/ssg',
        'nextjs/ssg-helpers',
        'nextjs/starter-projects',
      ],
    },
    {
      type: 'category',
      label: 'Extra information',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Extra Information',
        slug: '/extra',
      },
      items: [
        'further/faq',
        'further/rpc',
        'further/subscriptions',
        'further/further-reading',
      ],
    },
    {
      type: 'category',
      label: 'API Reference (Auto-generated)',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'typedoc',
        },
      ],
    },
    {
      type: 'doc',
      id: 'migration/migrate-from-v9-to-v10',
    },
  ],
};
