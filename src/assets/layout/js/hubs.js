/*!
 * ASP.NET SignalR JavaScript Library v2.3.0-rtm
 * http://signalr.net/
 *
 * Copyright (c) .NET Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 *
 */

/// <reference path="..\..\SignalR.Client.JS\Scripts\jquery-1.6.4.js" />
/// <reference path="jquery.signalR.js" />
(function ($, window, undefined) {
    /// <param name="$" type="jQuery" />
    "use strict";

    if (typeof ($.signalR) !== "function") {
        throw new Error("SignalR: SignalR is not loaded. Please ensure jquery.signalR-x.js is referenced before ~/signalr/js.");
    }

    var signalR = $.signalR;

    function makeProxyCallback(hub, callback) {
        return function () {
            // Call the client hub method
            callback.apply(hub, $.makeArray(arguments));
        };
    }

    function registerHubProxies(instance, shouldSubscribe) {
        var key, hub, memberKey, memberValue, subscriptionMethod;

        for (key in instance) {
            if (instance.hasOwnProperty(key)) {
                hub = instance[key];

                if (!(hub.hubName)) {
                    // Not a client hub
                    continue;
                }

                if (shouldSubscribe) {
                    // We want to subscribe to the hub events
                    subscriptionMethod = hub.on;
                } else {
                    // We want to unsubscribe from the hub events
                    subscriptionMethod = hub.off;
                }

                // Loop through all members on the hub and find client hub functions to subscribe/unsubscribe
                for (memberKey in hub.client) {
                    if (hub.client.hasOwnProperty(memberKey)) {
                        memberValue = hub.client[memberKey];

                        if (!$.isFunction(memberValue)) {
                            // Not a client hub function
                            continue;
                        }

                        // Use the actual user-provided callback as the "identity" value for the registration.
                        subscriptionMethod.call(hub, memberKey, makeProxyCallback(hub, memberValue), memberValue);
                    }
                }
            }
        }
    }

    $.hubConnection.prototype.createHubProxies = function () {
        var proxies = {};
        this.starting(function () {
            // Register the hub proxies as subscribed
            // (instance, shouldSubscribe)
            registerHubProxies(proxies, true);

            this._registerSubscribedHubs();
        }).disconnected(function () {
            // Unsubscribe all hub proxies when we "disconnect".  This is to ensure that we do not re-add functional call backs.
            // (instance, shouldSubscribe)
            registerHubProxies(proxies, false);
        });

        proxies['agentsHub'] = this.createHubProxy('agentsHub'); 
        proxies['agentsHub'].client = { };
        proxies['agentsHub'].server = {
            _GetRooms: function (AgentId, ChatbotId, SlotsCount) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["_GetRooms"], $.makeArray(arguments)));
             },

            agentLogout: function (AgentId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["agentLogout"], $.makeArray(arguments)));
             },

            agentOffLine: function (AgentId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["AgentOffLine"], $.makeArray(arguments)));
             },

            agentOnLine: function (AgentId, chatBodId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["AgentOnLine"], $.makeArray(arguments)));
             },

            closeOffLineClientRoom: function (ClientId, ProjectId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["CloseOffLineClientRoom"], $.makeArray(arguments)));
             },

            closeRoom: function (ClientId, ProjectId, Reason) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["CloseRoom"], $.makeArray(arguments)));
             },

            connect: function (userId, department, chatBodId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["Connect"], $.makeArray(arguments)));
             },

            disconnect: function (ConnectionId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["Disconnect"], $.makeArray(arguments)));
             },

            getBICRooms: function (AgentId, ProjectId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["GetBICRooms"], $.makeArray(arguments)));
             },

            getConversationHistory: function (clientId, chatbodId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["GetConversationHistory"], $.makeArray(arguments)));
             },

            getRoom: function (clientId, ChatbotId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["GetRoom"], $.makeArray(arguments)));
             },

            getRooms: function (AgentId, ProjectId, SlotsCount) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["GetRooms"], $.makeArray(arguments)));
             },

            ping: function (counter) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["Ping"], $.makeArray(arguments)));
             },

            releaseClientRoom: function (ClientId, ProjectId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["ReleaseClientRoom"], $.makeArray(arguments)));
             },

            roomsConnectionRecovery: function (userId, ProjectId, ModeBIC) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["RoomsConnectionRecovery"], $.makeArray(arguments)));
             },

            sendAttachment: function (ClientId, projectId, Message, MediaUrl, ResponseTime) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SendAttachment"], $.makeArray(arguments)));
             },

            sendLogs: function (connectionId, logs, chatbotId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SendLogs"], $.makeArray(arguments)));
             },

            sendSpecific: function (userId, message, projectId, ResponseTime) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SendSpecific"], $.makeArray(arguments)));
             },

            sendStaticMessage: function (userId, id, projectId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SendStaticMessage"], $.makeArray(arguments)));
             },

            setActive: function (AgentId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SetActive"], $.makeArray(arguments)));
             },

            setAgentOnline: function (AgentId, name, projectId, chatBodId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SetAgentOnline"], $.makeArray(arguments)));
             },

            setTypingMode: function (userId, mode, chatbotId) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["SetTypingMode"], $.makeArray(arguments)));
             },

            transferClient: function (ClientId, projectId, Department) {
                return proxies['agentsHub'].invoke.apply(proxies['agentsHub'], $.merge(["TransferClient"], $.makeArray(arguments)));
             }
        };

        proxies['clientsHub'] = this.createHubProxy('clientsHub'); 
        proxies['clientsHub'].client = { };
        proxies['clientsHub'].server = {
            closeRoom: function (userId, ChatbotId, projectId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["CloseRoom"], $.makeArray(arguments)));
             },

            connect: function (userId, clientInfo, chatBodId, lang) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["Connect"], $.makeArray(arguments)));
             },

            disconnect: function (ConnectionId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["Disconnect"], $.makeArray(arguments)));
             },

            getDepatrments: function (ChatBodId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["GetDepatrments"], $.makeArray(arguments)));
             },

            roomConnectionRecovery: function (userId, projectId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["RoomConnectionRecovery"], $.makeArray(arguments)));
             },

            send: function (userId, message, chatbotId, projectId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["Send"], $.makeArray(arguments)));
             },

            sendAttachment: function (userId, message, mediaUrl, chatbotId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["SendAttachment"], $.makeArray(arguments)));
             },

            writeLogs: function (userId, message, mediaUrl, chatbotId) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["WriteLogs"], $.makeArray(arguments)));
             },

            xConnect: function (userId, department, clientInfo, ProjectId, chatBodId, lang) {
                return proxies['clientsHub'].invoke.apply(proxies['clientsHub'], $.merge(["XConnect"], $.makeArray(arguments)));
             }
        };

        return proxies;
    };

    signalR.hub = $.hubConnection("/signalr", { useDefaultPath: false });
    $.extend(signalR, signalR.hub.createHubProxies());

}(window.jQuery, window));