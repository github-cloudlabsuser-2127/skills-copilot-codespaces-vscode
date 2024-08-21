# Variables
$resourceGroupName = "exampleResourceGroup"
$location = "WestUS"
$storageAccountName = "examplestorageacct"

# Login to Azure
Connect-AzAccount

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2" `
                     -AccessTier "Hot"

Write-Output "Storage account '$storageAccountName' created successfully in resource group '$resourceGroupName'."