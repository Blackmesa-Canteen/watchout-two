//
//  watchout_two_wearableApp.swift
//  watchout-two-wearable Watch App
//
//  Created by Xiaotian Li on 14/10/2024.
//

import SwiftUI

@main
struct watchout_two_wearable_Watch_AppApp: App {
    @WKApplicationDelegateAdaptor(ExtensionDelegate.self) var appDelegate
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
