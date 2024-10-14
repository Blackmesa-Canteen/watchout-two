//
//  MainViewController.swift
//  App
//
//  Created by Xiaotian Li on 15/10/2024.
//


import Foundation
import Capacitor
import WatchConnectivity

class MainViewController: CAPBridgeViewController, WCSessionDelegate {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if (WCSession.isSupported()) {
            let session = WCSession.default
            session.delegate = self
            session.activate()
        }
        
    }
    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {

    }

    func sessionDidBecomeInactive(_ session: WCSession) {

    }

    func sessionDidDeactivate(_ session: WCSession) {

    }
    
    func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        let value = message["value"] as? String
        
        NotificationCenter.default.post(name: .onWatchValueUpdated, object: value)
    }
}

  
