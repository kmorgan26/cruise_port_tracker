$base = "d:\Projects\cruise_port_tracker\src\images"
$output = @("const PHOTO_MANIFEST = {")

Get-ChildItem -Recurse $base -Directory | ForEach-Object {
  $files = Get-ChildItem $_.FullName -File | Where-Object { $_.Name -ne ".gitkeep" }
  if ($files.Count -gt 0) {
    $rel = $_.FullName.Substring("d:\Projects\cruise_port_tracker\src\".Length).Replace("\", "/")
    $fileList = ($files | ForEach-Object { '    "' + ($_.Name -replace '"', '\"') + '"' }) -join ",`n"
    $output += "  `"$rel`": [`n$fileList`n  ],"
  }
}

$output += "};"
[System.IO.File]::WriteAllText("d:\Projects\cruise_port_tracker\src\data\photos.js", ($output -join "`n"))
Write-Host "Manifest updated."
