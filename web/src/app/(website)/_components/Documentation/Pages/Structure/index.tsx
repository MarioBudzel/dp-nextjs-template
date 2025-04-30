import Flex from "@/components/common/Flex";
import CodeBlock from "@/components/common/CodeBlock";
import DocsSubtitle from "../../components/DocsSubtitle";

const Structure: React.FC = () => {
  return (
    <Flex className="gap-8 flex-col pb-5">
      <DocsSubtitle>Structure</DocsSubtitle>
      <CodeBlock rounded>
        {`├── api/
│  ├── app.js
│  ├── axios/
│  ├── Dockerfile
│  ├── Dockerfile.dev
│  ├── node_modules
│  ├── package.json
│  ├── package-lock.json
│  ├── seed/
│  ├── server.js
│  ├── src/
│  ├── testRequests/
│  ├── universal/
│  └── uploads/
├── docker-compose.yml
├── nginx/
│  ├── default.conf
│  ├── default_prod.conf
│  ├── Dockerfile
│  └── Dockerfile.dev
├── web/
│  ├── components.json
│  ├── Dockerfile
│  ├── Dockerfile.dev
│  ├── next.config.mjs
│  ├── next-env.d.ts
│  ├── node_modules/
│  ├── package.json
│  ├── package-lock.json
│  ├── postcss.config.js
│  ├── prisma/
│  ├── public/
│  ├── src/
│  ├── tailwind.config.ts
│  └── tsconfig.json
└── README.md`}
      </CodeBlock>
    </Flex>
  );
};

export default Structure;
