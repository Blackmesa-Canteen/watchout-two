//
//  watch-plugin-defination.h
//  App
//
//  Created by Xiaotian Li on 15/10/2024.
//

#ifndef watch_plugin_defination_h
#define watch_plugin_defination_h

#import <Capacitor/Capacitor.h>

CAP_PLUGIN(WatchOSPlugin, "WatchOSPlugin",
           CAP_PLUGIN_METHOD(getState, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setValue, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(subscribe, CAPPluginReturnCallback);
           
)

#endif /* watch_plugin_defination_h */
