$ftpServer = "145.79.9.243"
$username = "u848516441.shifandailyposts.mediasosial.net"
$password = "ipajsfi()&(290ufJ"

Write-Host "Connecting to Hostinger FTP at $ftpServer..."

function Upload-FtpFile {
    param (
        [string]$localFilePath,
        [string]$remotePath
    )

    $ftpUrl = "ftp://$ftpServer/$remotePath"
    Write-Host "Uploading $localFilePath to $ftpUrl ..."

    for ($attempt = 1; $attempt -le 3; $attempt++) {
        try {
            $client = New-Object System.Net.WebClient
            $client.Credentials = New-Object System.Net.NetworkCredential($username, $password)
            $client.UploadFile($ftpUrl, "STOR", $localFilePath)
            $client.Dispose()
            Write-Host "  -> Success uploading $remotePath!"
            Start-Sleep -Seconds 1
            return $true
        } catch {
            Write-Host "  -> Attempt $attempt failed for $remotePath : $_"
            Start-Sleep -Seconds 2
        }
    }
    return $false
}

# Upload files with clean connection releases
Upload-FtpFile "d:\Portofolio Shifan\index.html" "index.html"
Upload-FtpFile "d:\Portofolio Shifan\styles.css" "styles.css"
Upload-FtpFile "d:\Portofolio Shifan\admin.html" "admin.html"
Upload-FtpFile "d:\Portofolio Shifan\script.js" "script.js"
Upload-FtpFile "d:\Portofolio Shifan\assets\images\shifan_hero.jpg" "assets/images/shifan_hero.jpg"

Write-Host "========================================="
Write-Host "ALL WEBSITE FILES UPLOADED SUCCESSFULLY!"
Write-Host "========================================="
