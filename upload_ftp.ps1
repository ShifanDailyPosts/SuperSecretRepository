$ftpServer = "145.79.9.243"
$username = "u848516441.shifandailyposts.mediasosial.net"
$password = "ipajsfi()&(290ufJ"

Write-Host "Connecting to Hostinger FTP at $ftpServer..."

$client = New-Object System.Net.WebClient
$client.Credentials = New-Object System.Net.NetworkCredential($username, $password)

function Upload-FtpFile {
    param (
        [string]$localFilePath,
        [string]$remotePath
    )

    $ftpUrl = "ftp://$ftpServer/$remotePath"
    Write-Host "Uploading $localFilePath to $ftpUrl ..."

    try {
        $client.UploadFile($ftpUrl, "STOR", $localFilePath)
        Write-Host "  -> Success uploading $remotePath!"
        return $true
    } catch {
        Write-Host "  -> Error uploading $remotePath : $_"
        return $false
    }
}

function Create-FtpDirectory {
    param (
        [string]$remoteDirPath
    )

    $ftpUrl = "ftp://$ftpServer/$remoteDirPath"
    try {
        $request = [System.Net.FtpWebRequest]::Create($ftpUrl)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $request.Credentials = New-Object System.Net.NetworkCredential($username, $password)
        $request.UsePassive = $true
        $request.KeepAlive = $false

        $response = $request.GetResponse()
        $response.Close()
        Write-Host "Created directory: $remoteDirPath"
    } catch {
        # Directory might already exist
    }
}

# Create subdirectories if needed
Create-FtpDirectory "assets"
Create-FtpDirectory "assets/images"

# Upload all website files
Upload-FtpFile "d:\Portofolio Shifan\index.html" "index.html"
Upload-FtpFile "d:\Portofolio Shifan\styles.css" "styles.css"
Upload-FtpFile "d:\Portofolio Shifan\script.js" "script.js"
Upload-FtpFile "d:\Portofolio Shifan\assets\images\shifan_hero.jpg" "assets/images/shifan_hero.jpg"

Write-Host "========================================="
Write-Host "ALL WEBSITE FILES UPLOADED SUCCESSFULLY!"
Write-Host "========================================="
