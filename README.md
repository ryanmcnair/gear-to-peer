# Gear to Peer - Musical instrument database, for musicians
I plan to build a mobile app for musicians to store data and keep track of their gear. This could be very useful for insurance purposes in case of theft or to show off new acquisitions. Users will log into the app and they will be able to view their collection or add to it. There will be sections for each instrument (guitar, bass, drums, pedals, amps, etc) in the collection view. Users will add instrument information, brand, year, color, serial number and add pictures of the instrument as well as receipt image. There would also be a section to store links to YouTube videos or Soundcloud audio of users playing the instrument. Users can also share data in an unauthenticated view, which excludes receipt and serial number. On a larger scale, road crew of national/touring acts could use this app to make notes on string gauge and setup or just general preferences of the performer/musician.

I follow many musicians on Instagram and Twitter and very often someone will post about how a tour van was broken into and gear was stolen. Usually, the posts include just a list of items with fairly vague descriptions. It would be great to store actual pictures and descriptions online in case of theft or fire. Also, this would be a way to share new gear acquisitions with friends and colleagues. There is one other guitar tracker site available but it’s not mobile and its focus is on maintenance.

This project will definitely include many challenges as I haven’t designed a mobile specific app to date. I plan on incorporating mobile features like access to the camera roll and sending an email/text message from the app. If time permits, I’d like to access the camera as well.

MVP includes:
- Users sign in using Google authentication
- Create instrument collections
- Add instruments within the collection
- Update instrument profiles
- Delete instrument profiles or archive them
- Authenticated view of instruments
- Unauthenticated view of instruments, which excludes receipt image and serial numbers
- Export feature to share instrument, in both authenticated (for insurance) and unauthenticated (for friends) views

Stretch goals include:
- Create a social network where users can “friend” each other and view collections (excluding receipts and serial numbers) within the app
- Have an alert show when a friend adds a new item.
- Include a “Tour” section that users can move pieces of gear into when on tour. They can add notes or specifications for road crew to access while on tour but then delete or archive once the tour ends.
- Allow app to access camera and take photos directly within app.
- Set up themes based on iconic guitars and players. Such as, Van Halen theme, Pantera theme
- Import data from Reverb.com, watch list and purchases (not sure if this is an option)

## Wireframe
[Link](https://www.figma.com/file/5Nj2gvH6QGMjEveFnYoTyG/GeartoPeer?node-id=0%3A1)

![Gear to Peer Wireframe](https://user-images.githubusercontent.com/67588177/100519413-599b4680-315d-11eb-8c94-ee142aab49da.png)

## ERD
[Link](https://lucid.app/lucidchart/invitations/accept/fc576bd8-3550-4e4d-a344-e10a36e53c7e)

![Gear to Peer ERD](https://user-images.githubusercontent.com/67588177/99994125-3b5cd180-2d7e-11eb-8d41-fc7a01fb89e9.png)