// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "liftit-homepage",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          defaultTags: {
            tags: {
              Application: "LiftIt-Homepage",
              Environment: input?.stage === "production" ? "production" : "dev",
            },
          },
        },
      },
    };
  },
  async run() {
    const certificateArn =
      "arn:aws:acm:us-east-1:150479998935:certificate/32dc0b94-fe72-4110-aced-96e6ae794e58";

    // Domain configuration per stage
    const domainConfig =
      $app.stage === "production"
        ? {
            name: "liftit.fit",
            aliases: ["www.liftit.fit"],
            dns: false as const,
            cert: certificateArn,
          }
        : undefined;

    new sst.aws.StaticSite("LiftitHomepage", {
      build: {
        command: "npm run build",
        output: "out",
      },
      domain: domainConfig,
      assets: {
        // Hashed Next.js chunks — immutable, cache forever
        fileOptions: [
          {
            files: "_next/static/**",
            cacheControl: "public,max-age=31536000,immutable",
          },
          // Images — long cache, revalidate on deploy
          {
            files: ["images/**", "*.png"],
            cacheControl: "public,max-age=2592000,s-maxage=31536000",
          },
          // Web manifest + robots
          {
            files: ["manifest.webmanifest", "robots.txt"],
            cacheControl: "public,max-age=86400",
          },
          // HTML — short cache so users get fresh content after deploys
          {
            files: "**/*.html",
            cacheControl: "public,max-age=0,s-maxage=31536000,must-revalidate",
          },
        ],
      },
    });
  },
});
