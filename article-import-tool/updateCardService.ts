import runImport from "./core/runImport"
import buildCardProgramService from "./domain/buildCardProgramService"
import dataCard from "./data_card"

async function run() {
    console.log(`🚀 Bắt đầu chạy update đối với CardProgramService...`)

    await runImport({
        buildPayload: buildCardProgramService as any,
        data: dataCard as any,
        option: {
            supplierId: "844844ba-e95b-4d36-a4ad-7992d9d789bf" // Sẽ gán vào SupplierIds mặc định
        },
        commandName: "UpdateInformationCardProgramService",
        domain: "CardProgramService"
    })

    console.log(`✅ Hoàn thành update CardProgramService!`)
}

run()
