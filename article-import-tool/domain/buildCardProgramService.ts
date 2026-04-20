export interface CardProgramServiceInput {
    Id: string;
    Forms?: any[];
    Description?: string;
    Name?: string;
    SubDescription?: string;
    Categories?: any[];
    Images?: any[];
    SupplierIds?: string[];
    DailyLimit?: number;
    LanguageId?: string;
    MerchantId?: string;
    ActionBy?: string;
}

export default async function buildCardProgramService(
    item: CardProgramServiceInput,
    options?: { supplierId?: string }
) {
    return {
        Id: item.Id,
        Forms: item.Forms || [],
        Description: item.Description || "Edited",
        Name: item.Name || "Edited",
        SubDescription: item.SubDescription || "",
        Categories: item.Categories || [],
        Images: item.Images || [],
        SupplierIds: item.SupplierIds || (options?.supplierId ? [options.supplierId] : ["844844ba-e95b-4d36-a4ad-7992d9d789bf"]),
        DailyLimit: item.DailyLimit !== undefined ? item.DailyLimit : 0,
        LanguageId: item.LanguageId || "838aef56-78bb-11e6-b5a6-00155d582814",
        MerchantId: item.MerchantId || "494ffd32-c6a4-4a9f-a68a-e9d8bbf8a80e",
        ActionBy: item.ActionBy || "40a7f698-6ab9-4f9d-b0ab-01f735af4344"
    }
}
