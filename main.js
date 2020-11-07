#!/usr/bin/env node

const GNode = require('node-gtk/lib/')

GNode.listAvailableModules().then(mod => console.log(mod))

const Gtk = GNode.require('Gtk', '3.0')
const Gdk = GNode.require('Gdk', '3.0')
const GdkPixBuf = GNode.require('GdkPixbuf', '2.0')
GNode.startLoop()
Gtk.init()


const settings = Gtk.Settings.getDefault()
// settings.gtkApplicationPreferDarkTheme = true;
// settings.gtkThemeName = 'Adwaita';

console.log(settings.gtkEnableAccels);


const win = new Gtk.Window({
    title: 'node-gtk',
    window_position: Gtk.WindowPosition.CENTER
});

win.on('show', Gtk.main);
win.on('destroy', Gtk.mainQuit);
win.setDefaultSize(200, 80);
// win.add(new Gtk.Label({label: 'Hello Gtk+'}));
win.add(new Gtk.Button({label: 'Hello Gtk+'}).on('clicked', () => {

    const rootWindow = Gdk.getDefaultRootWindow()
    let height = rootWindow.getHeight();
    let width = rootWindow.getWidth();


    let pixBuf = Gdk.pixbufGetFromWindow(rootWindow, 0, 0, width, height);
    pixBuf.savev('snap.png', 'png', [], [])

    console.log("hello")


}));
win.showAll();