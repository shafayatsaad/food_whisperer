
import type { Donor, Shelter, Driver, Rescue, AuditLog } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getAvatar = (index: number) => PlaceHolderImages[index % PlaceHolderImages.length]?.imageUrl || '';

export const donors: Donor[] = [
  { id: 'D001', fullName: 'Dhaka Eats Manager', phoneNumber: '1234567890', email: 'contact@dhakaeats.com', avatar: getAvatar(0), status: 'Active', joined: '2023-01-15', businessName: 'Dhaka Eats', taxId: 'TAX123', pickupAddress: 'Gulshan, Dhaka', foodSafetyWaiver: true, standardSurplusType: 'Prepared Meals', donations: 120 },
  { id: 'D002', fullName: 'Bread & Beyond Owner', phoneNumber: '1234567891', email: 'info@breadbeyond.com', avatar: getAvatar(1), status: 'Active', joined: '2023-02-20', businessName: 'Bread & Beyond', taxId: 'TAX456', pickupAddress: 'Banani, Dhaka', foodSafetyWaiver: true, standardSurplusType: 'Bread/Bakery', donations: 250 },
  { id: 'D003', fullName: 'CTG Grocers Contact', phoneNumber: '1234567892', email: 'sales@ctg-grocers.com', avatar: getAvatar(2), status: 'Inactive', joined: '2023-03-10', businessName: 'Chittagong Grocers', taxId: 'TAX789', pickupAddress: 'Agrabad, Chittagong', foodSafetyWaiver: false, standardSurplusType: 'Produce', donations: 50 },
  { id: 'D004', fullName: 'Karim Ahmed', phoneNumber: '1234567893', email: 'karim@email.com', avatar: getAvatar(3), status: 'Active', joined: '2023-04-05', businessName: 'Karim\'s Kitchen', taxId: 'N/A', pickupAddress: 'Dhanmondi, Dhaka', foodSafetyWaiver: true, standardSurplusType: 'Prepared Meals', donations: 15 },
  { id: 'D005', fullName: 'Sylhet Delights PR', phoneNumber: '1234567894', email: 'sylhet@delights.com', avatar: getAvatar(4), status: 'Pending', joined: '2023-05-21', businessName: 'Sylhet Delights', taxId: 'TAX101', pickupAddress: 'Zindabazar, Sylhet', foodSafetyWaiver: false, standardSurplusType: 'Other', donations: 0 },
];

export const shelters: Shelter[] = [
  { id: 'S001', fullName: 'Hope Foundation Director', phoneNumber: '2345678901', email: 'support@hope.org', avatar: getAvatar(5), status: 'Active', joined: '2022-11-01', shelterName: 'Hope Foundation', address: 'Mirpur, Dhaka', capacity: 85, population: 150, intakeHours: '08:00 - 20:00', restrictions: [], hasRefrigeration: true, lastDonation: '2024-07-29' },
  { id: 'S002', fullName: 'New Beginnings Head', phoneNumber: '2345678902', email: 'new@beginnings.org', avatar: getAvatar(6), status: 'Active', joined: '2023-01-05', shelterName: 'New Beginnings', address: 'Mohammadpur, Dhaka', capacity: 60, population: 100, intakeHours: '09:00 - 18:00', restrictions: ['No Raw Meat'], hasRefrigeration: true, lastDonation: '2024-07-27' },
  { id: 'S003', fullName: 'CTG Shelter Home Lead', phoneNumber: '2345678903', email: 'contact@ctgshelter.org', avatar: getAvatar(7), status: 'Active', joined: '2023-02-12', shelterName: 'CTG Shelter Home', address: 'Pahartali, Chittagong', capacity: 95, population: 200, intakeHours: '24/7', restrictions: [], hasRefrigeration: true, lastDonation: '2024-07-25' },
  { id: 'S004', fullName: 'Safe Haven Coordinator', phoneNumber: '2345678904', email: 'safe.haven@email.com', avatar: getAvatar(8), status: 'Inactive', joined: '2023-03-18', shelterName: 'Safe Haven', address: 'Uttara, Dhaka', capacity: 50, population: 75, intakeHours: '10:00 - 16:00', restrictions: ['No Perishables'], hasRefrigeration: false, lastDonation: '2024-06-15' },
];

export const drivers: Driver[] = [
  { id: 'DRV01', fullName: 'Rahim Khan', phoneNumber: '3456789012', email: 'rahim.k@email.com', avatar: getAvatar(9), status: 'Active', joined: '2023-01-20', vehicleType: 'Bike', licenseIdUrl: '/license/rahim.jpg', availability: 'Weekends 18:00-22:00', rescuesCompleted: 150 },
  { id: 'DRV02', fullName: 'Fatima Ahmed', phoneNumber: '3456789013', email: 'fatima.a@email.com', avatar: getAvatar(0), status: 'Active', joined: '2023-02-15', vehicleType: 'Car', licenseIdUrl: '/license/fatima.jpg', availability: 'Weekdays 09:00-12:00', rescuesCompleted: 95 },
  { id: 'DRV03', fullName: 'Sanjida Islam', phoneNumber: '3456789014', email: 'sanjida@email.com', avatar: getAvatar(1), status: 'Inactive', joined: '2023-04-01', vehicleType: 'Van', licenseIdUrl: '/license/sanjida.jpg', availability: 'N/A', rescuesCompleted: 30 },
  { id: 'DRV04', fullName: 'Jamal Uddin', phoneNumber: '3456789015', email: 'jamal.u@email.com', avatar: getAvatar(2), status: 'Active', joined: '2023-05-10', vehicleType: 'Bike', licenseIdUrl: '/license/jamal.jpg', availability: 'All times', rescuesCompleted: 78 },
];

export const rescues: Rescue[] = [
  { id: 'R001', foodItem: '50 Bagels', quantity: '50 units', donorName: 'Bread & Beyond', shelterName: 'Hope Foundation', driverName: 'Rahim Khan', status: 'Completed', timestamp: '2024-07-29T11:00Z' },
  { id: 'R002', foodItem: 'Leftover Biryani', quantity: '20 plates', donorName: 'Dhaka Eats', shelterName: 'New Beginnings', status: 'Flagged', timestamp: '2024-07-29T10:30Z' },
  { id: 'R003', foodItem: 'Fresh Vegetables', quantity: '3 crates', donorName: 'Chittagong Grocers', shelterName: 'CTG Shelter Home', driverName: 'Fatima Ahmed', status: 'In Progress', timestamp: '2024-07-29T12:00Z' },
  { id: 'R004', foodItem: '100 Naan Breads', quantity: '100 units', donorName: 'Bread & Beyond', shelterName: 'New Beginnings', status: 'Pending', timestamp: '2024-07-30T09:00Z' },
  { id: 'R005', foodItem: 'Hot Meal', quantity: '30 boxes', donorName: 'Karim\'s Kitchen', shelterName: 'Hope Foundation', status: 'Flagged', timestamp: '2024-07-30T10:00Z' },
];

export const auditLogs: AuditLog[] = [
  { id: 'L001', timestamp: '2024-07-29T11:00Z', action: 'Match Found', user: 'AI Dispatcher', details: 'Matched Bread & Beyond with Hope Foundation.', needScore: 92.5 },
  { id: 'L002', timestamp: '2024-07-29T10:30Z', action: 'Safety Gate Triggered', user: 'System', details: 'Donation "Leftover Biryani" from Dhaka Eats flagged for manual review due to ambiguous food type.' },
  { id: 'L003', timestamp: '2024-07-29T12:00Z', action: 'Dispatch Accepted', user: 'Fatima Ahmed', details: 'Accepted rescue from Chittagong Grocers to CTG Shelter Home.' },
  { id: 'L004', timestamp: '2024-07-28T18:00Z', action: 'Donation Completed', user: 'Rahim Khan', details: 'Completed donation from Dhaka Eats to New Beginnings.' },
  { id: 'L005', timestamp: '2024-07-28T17:00Z', action: 'User Deactivated', user: 'Admin', details: 'Deactivated driver Sanjida Islam.' },
  { id: 'L006', timestamp: '2024-07-30T10:00Z', action: 'Safety Gate Triggered', user: 'System', details: 'Donation "Hot Meal" from Karim\'s Kitchen flagged for manual review.' },
];
