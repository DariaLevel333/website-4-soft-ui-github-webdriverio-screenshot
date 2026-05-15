import type { Config } from "@level-ci/cli";

export default {
 organization: "daria-osokina-1-levelaccess-com-kofcj",
 project: "website-4-soft-ui-github-webdriverio-screenshot",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;