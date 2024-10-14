//
//  ContentView.swift
//  watchout-two-wearable Watch App
//
//  Created by Xiaotian Li on 14/10/2024.
//

import SwiftUI
import Combine
import WatchConnectivity


struct ContentView: View {
    @State private var value = "0"

    var body: some View {
        VStack {
            TextField("Input", text: $value)
                        .padding()
            
            Button("Send value to phone") {
                WCSession.default.sendMessage(["value": self.value], replyHandler: nil)
            }
            .padding()
        }
        .onReceive(NotificationCenter.default.publisher(for: .onCapValueUpdated), perform: { val in
            self.value = String(describing: val.object!)
        })
    }
}
