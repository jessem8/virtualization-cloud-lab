$ErrorActionPreference = 'Stop'
$taskNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
if (-not (Test-Path -LiteralPath $taskNode)) {
    $taskNode = (Get-Command node -ErrorAction Stop).Source
}
$taskServer = Join-Path $PSScriptRoot 'serve.mjs'
$taskUrl = 'http://127.0.0.1:3187/'
try {
    $taskResponse = Invoke-WebRequest -Uri ($taskUrl + 'network-assets/topology.json') -TimeoutSec 2
    if (($taskResponse.Content | ConvertFrom-Json).revision -ne 'diagramme-2026-10-28') { throw 'Port occupé par une autre application.' }
} catch {
    if (Get-NetTCPConnection -LocalPort 3187 -State Listen -ErrorAction SilentlyContinue) { throw 'Le port3187 est occupé. Arrêter son propriétaire ou définir LAB_DIAGRAM_PORT pour un lancement manuel.' }
    Start-Process -FilePath $taskNode -ArgumentList @('"' + $taskServer + '"') -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
}
Start-Process $taskUrl
