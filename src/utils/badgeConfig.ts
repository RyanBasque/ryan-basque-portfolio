export interface BadgeData {
  name: string;
  image?: string;
  description?: string;
}

export const BADGE_CONFIG: Record<string, BadgeData> = {
  vue: {
    name: "Vue.js",
    image: "/badges/vue.svg",
    description: "Vue.js Developer",
  },
  angular: {
    name: "Angular",
    image: "/badges/angular.svg",
    description: "Angular Developer",
  },
  tailwind: {
    name: "Tailwind CSS",
    image: "/badges/tailwind.svg",
    description: "Tailwind CSS Expert",
  },
  sass: {
    name: "SASS",
    image: "/badges/sass.svg",
    description: "SASS/SCSS Expert",
  },
  vite: {
    name: "Vite",
    image: "/badges/vite.svg",
    description: "Vite Build Tool",
  },
  express: {
    name: "Express.js",
    image: "/badges/express.svg",
    description: "Express.js Developer",
  },
  nestjs: {
    name: "NestJS",
    image: "/badges/nestjs.svg",
    description: "NestJS Backend Developer",
  },
  graphql: {
    name: "GraphQL",
    image: "/badges/graphql.svg",
    description: "GraphQL API Specialist",
  },
  restapi: {
    name: "REST API",
    image: "/badges/restapi.svg",
    description: "REST API Developer",
  },
  postgresql: {
    name: "PostgreSQL",
    image: "/badges/postgresql.svg",
    description: "PostgreSQL Specialist",
  },
  mongodb: {
    name: "MongoDB",
    image: "/badges/mongodb.svg",
    description: "MongoDB Developer",
  },
  mysql: {
    name: "MySQL",
    image: "/badges/mysql.svg",
    description: "MySQL Expert",
  },
  vercel: {
    name: "Vercel",
    image: "/badges/vercel.svg",
    description: "Deployed with Vercel",
  },
  firebase: {
    name: "Firebase",
    image: "/badges/firebase.svg",
    description: "Firebase Developer",
  },
  gcp: {
    name: "Google Cloud",
    image: "/badges/gcp.svg",
    description: "Google Cloud Platform",
  },
  kubernetes: {
    name: "Kubernetes",
    image: "/badges/kubernetes.svg",
    description: "Kubernetes Operator",
  },
  githubactions: {
    name: "GitHub Actions",
    image: "/badges/githubactions.svg",
    description: "CI/CD with GitHub Actions",
  },
};

export const getBadgeData = (badgeName: string): BadgeData => {
  return (
    BADGE_CONFIG[badgeName] || {
      name: badgeName,
      description: badgeName,
    }
  );
};
