<#
.SYNOPSIS
  Sets up additional folders and configuration settings in an Angular project.

  .DESCRIPTION
    This script creates several directories and adjusts configuration settings
    in the provided Angular project directory. It requires Node.js, npm, and the
    Angular CLI to be installed on the system.

    - The script begins with a documentation block that describes its purpose, usage, and parameters.
    - It defines one parameters: ProjectRoot for the Angular project's root directory.
    - It checks for the ProjectRoot parameter and displays an error if it's missing.

    - The script changes the working directory to the Angular project's root directory using Set-Location.
    - It uses New-Item to create the required directories. Note that PowerShell can create multiple directories at once, 
      unlike the mkdir command in Linux which requires individual calls or complex syntax for multiple directories.

    - Angular CLI commands are executed as is because they are platform-independent.
    - The script checks for the json tool and installs it if necessary using npm install -g json.
    - It then uses the json command to update the tsconfig.json file as required.

    - Ensure that PowerShell script execution is enabled on your system, 
      and adjust the script permissions if necessary. To run this script, 
      you might need to modify your system's execution policy by running 
      Set-ExecutionPolicy RemoteSigned in an elevated PowerShell prompt.

.PARAMETER ProjectRoot
    The root directory of the Angular project.

.EXAMPLE
    .\ngSetupAppFolders.ps1 -ProjectRoot "C:\path\to\your\angular\project"
    
    Sets up the project located at the specified path.

.EXAMPLE
    Get-Help .\ngSetupAppFolders.ps1 -Full
    
    Displays the help information.
#>

param(
    [string]$ProjectRoot
)

if (-not $ProjectRoot) {
    Write-Error "ProjectRoot parameter is required. For more information, use: Get-Help .\ngSetupAppFolders.ps1 -Full"
    exit
}

Function main() {

    try {
        # Navigate to the project root directory
        Set-Location -Path $ProjectRoot
        
    
        # Create directories
        New-Item -ItemType Directory -Path "media", "src/app/core", "src/app/data", "src/app/modules", "src/app/shared", "src/styles", "src/styles/themes" -Force
    
        # Run Angular generate module commands
        ng generate module Core
        ng generate module Data
        ng generate module Shared

        #  Add Angular Material UI components to app
        ng add @angular/material
        ng generate module modules/material
        $pathMaterailModule = $ProjectRoot + "/src/app/modules/material.module.ts"
        Set-Content -Path $pathMaterailModule -Value $materialModuleFileContent
    

        # Check if json tool is installed, install if not
        if (-not (Get-Command "json" -ErrorAction SilentlyContinue)) {
            npm install -g json
        }
    
        # Update tsconfig.json file
        $content = Get-Content -Path 'tsconfig.json' -Raw
        $toRemove = '/* To learn more about this file see: https://angular.io/config/tsconfig. */'
        $updatedContent = $content.Replace($toRemove, '')
        $updatedContent | Set-Content -Path 'tsconfig.json'


        json -f tsconfig.json -I -c "this.baseUrl = './'"
        json -f tsconfig.json -I -c "this.compilerOptions.paths = {}"
        json -f tsconfig.json -I `
          -e "this.compilerOptions.paths['@app/*'] = ['src/app/core/*']" `
          -e "this.compilerOptions.paths['@shared/*'] = ['src/app/shared/*']" `
          -e "this.compilerOptions.paths['@env'] = ['src/environments/environment']"
    }
    catch {
        Write-Error "An error occurred: $_"
        exit
    }
}

$materialModuleFileContent = @"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule { }
"@


main