const {Builder, By, Key} = require("selenium-webdriver")

async function abrirSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://www.connectparts.com.br")
        await driver.sleep(10000)

        // Selecionado e clicando no produto
        const vtexButton = await driver.findElement(By.xpath("//a[@href='/radio-automotivo-mp3-player-bluetooth-2-usb-carrega-celular-app-denver-bt-189115/p']"))
        await vtexButton.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        // Calculando frete
        await driver.executeScript("window.scrollBy(0, 300);")
        const vtxFrete = await driver.findElement(By.name("postalCode"))
        await vtxFrete.sendKeys(" ")
        await vtxFrete.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        // Adicionando no carrinho
        const addOnCart = await driver.findElement(By.xpath("//div[contains(@class, 'vtex-flex-layout-0-x-flexColChild')]//button"))
        await addOnCart.click()
        await driver.sleep(5000)

        // Excluindo do carrinho
        const removeItem = await driver.findElement(By.id("remove-button-2339372"))
        await removeItem.click()
        await driver.sleep(3000)
        const closeCart = await driver.findElement(By.className("vtex-minicart-2-x-closeIconButton"))
        await closeCart.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        // Pesquisando produto
        await driver.executeScript("window.scrollBy(0, -300);")
        const searchForm = await driver.findElement(By.id("downshift-0-input"))
        await searchForm.sendKeys("Placa")
        await searchForm.sendKeys(Key.ENTER)
    } catch(e){
        console.log(e)
    }
}
abrirSite()