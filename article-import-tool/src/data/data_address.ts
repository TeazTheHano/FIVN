import { AddressInput } from "../domain/buildAddress";

// Dữ liệu mẫu (mock data) cho Address
const dataAddress: AddressInput[] = [
    {
        Name: "Mẫu Address 1",
        DetailAddress: "123 Đường ABC, Quận X, TP Y",
        Mobile: "0123456789",
        Email: "mock1@example.com",
        FriendlyUrl: "mau-address-1"
    },
    {
        Name: "Mẫu Address 2",
        DetailAddress: "456 Đường DEF, Quận Z, TP W",
        Mobile: "0987654321",
        Email: "mock2@example.com",
        FriendlyUrl: "mau-address-2"
    }
];

export default dataAddress;
