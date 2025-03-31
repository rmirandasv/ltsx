export type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
  updated_at: string;
  email_verified_at?: string;
};

export type Auth = {
  user: User;
};

export type SharedData = {
    auth: Auth;
};

export type AppBreadcrumbItem = {
  label: string;
  href: string;
};
