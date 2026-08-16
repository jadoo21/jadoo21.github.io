export interface Customer {
  id: number;
  name: string;
  email: string;
  company: string;
  role: string;
  status: "Active" | "Pending" | "Suspended";
}

export const customers: Customer[] = [
  {
    id: 1,
    name: "Ava Thompson",
    email: "ava.thompson@northwind.io",
    company: "Northwind",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Liam Carter",
    email: "liam.carter@acme.dev",
    company: "Acme",
    role: "Operator",
    status: "Active",
  },
  {
    id: 3,
    name: "Mia Patel",
    email: "mia.patel@broadbridge.com",
    company: "Broadbridge",
    role: "Manager",
    status: "Pending",
  },
  {
    id: 4,
    name: "Noah Kim",
    email: "noah.kim@solstice.co",
    company: "Solstice",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 5,
    name: "Olivia Garcia",
    email: "olivia.garcia@vertex.ltd",
    company: "Vertex",
    role: "Operator",
    status: "Suspended",
  },
  {
    id: 6,
    name: "Ethan Brooks",
    email: "ethan.brooks@harborline.net",
    company: "Harborline",
    role: "Manager",
    status: "Active",
  },
  {
    id: 7,
    name: "Sophia Li",
    email: "sophia.li@cinder.com",
    company: "Cinder",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 8,
    name: "James Nguyen",
    email: "james.nguyen@redwood.io",
    company: "Redwood",
    role: "Operator",
    status: "Pending",
  },
  {
    id: 9,
    name: "Isabella Rossi",
    email: "isabella.rossi@meridian.cc",
    company: "Meridian",
    role: "Manager",
    status: "Active",
  },
  {
    id: 10,
    name: "Lucas Müller",
    email: "lucas.muller@steinbach.de",
    company: "Steinbach",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 11,
    name: "Amelia Johnson",
    email: "amelia.johnson@kestrel.dev",
    company: "Kestrel",
    role: "Operator",
    status: "Suspended",
  },
  {
    id: 12,
    name: "Henry Dubois",
    email: "henry.dubois@atelier.fr",
    company: "Atelier",
    role: "Manager",
    status: "Active",
  },
  {
    id: 13,
    name: "Charlotte Brown",
    email: "charlotte.brown@halcyon.io",
    company: "Halcyon",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 14,
    name: "Elijah Wright",
    email: "elijah.wright@monolith.com",
    company: "Monolith",
    role: "Operator",
    status: "Pending",
  },
  {
    id: 15,
    name: "Harper Wilson",
    email: "harper.wilson@lantern.com",
    company: "Lantern",
    role: "Manager",
    status: "Active",
  },
  {
    id: 16,
    name: "Benjamin Clarke",
    email: "ben.clarke@forgeworks.co",
    company: "Forgeworks",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 17,
    name: "Evelyn Davis",
    email: "evelyn.davis@cascade.io",
    company: "Cascade",
    role: "Operator",
    status: "Active",
  },
  {
    id: 18,
    name: "Alexander Moore",
    email: "alex.moore@pearlcare.com",
    company: "Pearlcare",
    role: "Manager",
    status: "Suspended",
  },
  {
    id: 19,
    name: "Victoria Scott",
    email: "victoria.scott@oakfield.co",
    company: "Oakfield",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 20,
    name: "Daniel Torres",
    email: "daniel.torres@luminar.dev",
    company: "Luminar",
    role: "Operator",
    status: "Active",
  },
  {
    id: 21,
    name: "Elsa Andersson",
    email: "elsa.andersson@nordic.se",
    company: "Nordic",
    role: "Manager",
    status: "Pending",
  },
  {
    id: 22,
    name: "Jack Turner",
    email: "jack.turner@beluga.net",
    company: "Beluga",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 23,
    name: "Grace Adams",
    email: "grace.adams@quill.co",
    company: "Quill",
    role: "Operator",
    status: "Active",
  },
  {
    id: 24,
    name: "Leo Foster",
    email: "leo.foster@grange.dev",
    company: "Grange",
    role: "Manager",
    status: "Suspended",
  },
  {
    id: 25,
    name: "Nora Hughes",
    email: "nora.hughes@summit.io",
    company: "Summit",
    role: "Billing Admin",
    status: "Active",
  },
  {
    id: 26,
    name: "Sebastian Reid",
    email: "seb.reid@cobalt.ltd",
    company: "Cobalt",
    role: "Operator",
    status: "Pending",
  },
  {
    id: 27,
    name: "Zoe Campbell",
    email: "zoe.campbell@glenmore.com",
    company: "Glenmore",
    role: "Manager",
    status: "Active",
  },
  {
    id: 28,
    name: "Owen Bennett",
    email: "owen.bennett@arcadia.io",
    company: "Arcadia",
    role: "Billing Admin",
    status: "Active",
  },
];

export interface DashboardStat {
  id: string;
  label: string;
  value: number;
  delta: number;
}

export const dashboardStats: DashboardStat[] = [
  { id: "orders", label: "Orders today", value: 1284, delta: 8.2 },
  { id: "revenue", label: "Revenue", value: 48210, delta: 3.4 },
  { id: "active", label: "Active services", value: 892, delta: -1.1 },
  { id: "latency", label: "P95 latency (ms)", value: 142, delta: -4.6 },
];

export const timeSeries = [
  42, 58, 47, 71, 64, 89, 78, 95, 88, 106, 99, 121, 112, 134, 126, 148, 139, 161, 152,
  177,
];

export const mockCredentials = {
  email: "demo@rishabhroshan.dev",
  password: "demo1234",
};
