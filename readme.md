# Skinny Spook

## Description

A super minimal theme for the Ghost blogging platform to help make a small step towards a sustainable internet.

## Instructions

### Installation

Grab the latest package from releases and upload it from the themes menu.

### Making the menu work

Due to the limitations with creating fixed static content in the Ghost theming platform there is a little manual leg work required to get the menu page up and running:

1. In the Ghost Admin app create a new blank story called menu
2. In the page options, set it to a static page
3. Publish the page

### PWA manual cofiguration

If you do not want your blog to run as a PWA you can ignore the below instructions

#### Setup code injection

##### Header

'<link rel="manifest" href="/manifest.json">'

##### Footer

'''
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
</script>
'''

#### Configure an offline page

1. In the Ghost Admin app create a new blank story called offline
2. Add the message you want users to see when they are offline
3. In the page options, set it to a static page
4. Publish the page

#### Update manifest.json

Open the manifest.json file and update the name and short_name fields.