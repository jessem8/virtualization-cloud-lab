$ErrorActionPreference = 'Stop'
$taskNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
if (-not (Test-Path -LiteralPath $taskNode)) {
    $taskNode = (Get-Command node -ErrorAction Stop).Source
}
$taskServer = Join-Path $PSScriptRoot 'serve.mjs'
$taskPort = if ($env:LAB_DIAGRAM_PORT) { [int]$env:LAB_DIAGRAM_PORT } else { 3187 }
$taskUrl = 'http://127.0.0.1:' + $taskPort + '/'
try {
    $taskResponse = Invoke-WebRequest -Uri ($taskUrl + 'network-assets/topology.json') -UseBasicParsing -TimeoutSec 2
    if (($taskResponse.Content | ConvertFrom-Json).revision -ne 'presentation-4-2026-10-30') { throw 'Port occupé par une autre application.' }
} catch {
    if (Get-NetTCPConnection -LocalPort $taskPort -State Listen -ErrorAction SilentlyContinue) { throw ('Le port ' + $taskPort + ' est occupé. Arrêter son propriétaire ou définir LAB_DIAGRAM_PORT.') }
    Start-Process -FilePath $taskNode -ArgumentList @('"' + $taskServer + '"') -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
}
Start-Process $taskUrl
