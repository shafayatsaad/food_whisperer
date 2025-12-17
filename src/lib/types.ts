
export type User = {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  avatar: string;
  status: 'Active' | 'Inactive' | 'Pending';
  joined: string;
};

export type Donor = User & {
  businessName: string;
  taxId: string;
  pickupAddress: string;
  foodSafetyWaiver: boolean;
  standardSurplusType: 'Bread/Bakery' | 'Prepared Meals' | 'Produce' | 'Other';
  donations: number;
};

export type Shelter = User & {
  shelterName: string;
  address: string;
  capacity: number;
  population: number;
  intakeHours: string; // e.g., "08:00 - 20:00"
  restrictions: string[];
  hasRefrigeration: boolean;
  lastDonation: string;
};

export type Driver = User & {
  vehicleType: 'Car' | 'Van' | 'Bike';
  licenseIdUrl: string;
  availability: string; // e.g., "Weeknights 22:00 - 00:00"
  rescuesCompleted: number;
};

export type Rescue = {
  id: string;
  foodItem: string;
  quantity: string;
  donorName: string;
  shelterName: string;
  driverName?: string;
  status: 'Pending' | 'Accepted' | 'In Progress' | 'Completed' | 'Cancelled' | 'Flagged';
  timestamp: string;
};

export type AuditLog = {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  details: string;
  needScore?: number;
};
