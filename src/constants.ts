import { 
  Database, 
  Globe, 
  CreditCard, 
  FileText, 
  FileCheck, 
  Palette, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

export const BUSINESS_DETAILS = {
  name: "ELM Data Solutions - TRUPRINT Cyber Services",
  phones: ["0725514043","0712483657"],
  emails: ["elmdatasolutions@gmail.com","truprintc@gmail.com"],
  location: "Nakuru / Njoro, Kenya",
  whatsapp: "254725514043", "254712483657"
};

export const SERVICES = [
  {
    id: 'data-it',
    title: 'DATA & IT SERVICES',
    description: 'Expert data management and technical support for your business needs.',
    icon: Database,
    items: ['Data Entry', 'Data Analysis & Reporting', 'General IT Support']
  },
  {
    id: 'gov-services',
    title: 'ONLINE GOVERNMENT SERVICES',
    description: 'Hassle-free applications for essential government documents.',
    icon: Globe,
    items: ['Visa Application', 'HELB Application', 'GHRIS Services', 'KUCCPS Applications', 'TSC Services']
  },
  {
    id: 'ecitizen',
    title: 'E-CITIZEN SERVICES',
    description: 'Fast tracking of motor vehicle and licensing services.',
    icon: Smartphone,
    items: ['Motorcycle Transfer', 'Number Plate Generation', 'Motor Vehicle Search', 'Driving License Renewal']
  },
  {
    id: 'kra',
    title: 'KRA SERVICES',
    description: 'Professional tax compliance and returns filing.',
    icon: CreditCard,
    items: ['KRA Annual Returns Filing', 'Monthly Rental Income Returns', 'Withholding Tax Returns', 'eTIMS Services']
  },
  {
    id: 'general-apps',
    title: 'GENERAL APPLICATION SERVICES',
    description: 'Assistance with various official applications and permits.',
    icon: FileCheck,
    items: ['Passport Application', 'Temporary Passport Application', 'Good Conduct Application', 'Work Permit Application', 'NSSF Application']
  },
  {
    id: 'design-print',
    title: 'DESIGN & PRINT SERVICES',
    description: 'Creative design and high-quality printing solutions.',
    icon: Palette,
    items: ['Poster Design', 'Banner Design', 'Flyer Design', 'Receipt Book Printing', 'Letterhead Design', 'General Printing Services']
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Apply for a Passport in Kenya',
    excerpt: 'A comprehensive guide on the requirements and steps for a successful passport application.',
    date: 'March 20, 2026',
    content: `Applying for a passport in Kenya has become more streamlined through the eCitizen portal. Here is a step-by-step guide:
    
    1. Create an eCitizen account or log in if you already have one.
    2. Navigate to the Directorate of Immigration Services section.
    3. Select the "Passport Application" option.
    4. Fill in the application form accurately.
    5. Choose your passport type (32, 50, or 66 pages).
    6. Pay the required fee via M-Pesa or other available methods.
    7. Download and print the application form and three invoices.
    8. Book an appointment for biometrics at your preferred immigration office.
    
    At ELM Data Solutions, we assist you throughout this process to ensure your application is error-free.`
  },
  {
    id: 2,
    title: 'Step-by-Step Guide to Filing KRA Returns',
    excerpt: 'Don\'t wait for the deadline! Learn how to file your annual KRA returns easily.',
    date: 'March 15, 2026',
    content: `Filing KRA returns is a mandatory requirement for every Kenyan with a PIN. Here is how to do it:
    
    1. Log in to the iTax portal using your KRA PIN and password.
    2. Go to the "Returns" menu and select "File Return".
    3. Select the tax obligation (e.g., Income Tax - Resident Individual).
    4. Download the Excel or ODS form.
    5. Fill in the required details (employment income, tax deducted, etc.).
    6. Validate the form and generate the upload file.
    7. Upload the file on the iTax portal and submit.
    8. Download the acknowledgment receipt.
    
    If you find the process complex, visit us at ELM Data Solutions/TruPrint Cyber for professional assistance.`
  },
  {
    id: 3,
    title: 'Top eCitizen Services You Should Know',
    excerpt: 'Discover the essential services available on the eCitizen platform and how they benefit you.',
    date: 'March 10, 2026',
    content: `The eCitizen portal is a one-stop shop for government services. Some of the most critical services include:
    
    - Business Registration: Register your business or company online.
    - NTSA Services: Driving license renewal, vehicle search, and transfers.
    - Civil Registration: Marriage certificates and birth/death certificate applications.
    - Land Services: Land searches and transfers.
    - Good Conduct: Application for Police Clearance Certificates.
    
    Navigating these services can sometimes be tricky. We are here to help you get things done quickly and efficiently.`
  }
];
