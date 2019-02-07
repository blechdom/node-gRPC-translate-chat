/**
 * @fileoverview gRPC-Web generated client stub for translate_chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.translate_chat = require('./translate_chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.translate_chat.TranslateChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.translate_chat.TranslateChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.translate_chat.TranslateChatClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.translate_chat.TranslateChatClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.translate_chat.JoinChatRequest,
 *   !proto.translate_chat.JoinChatResponse>}
 */
const methodInfo_TranslateChat_JoinChat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.translate_chat.JoinChatResponse,
  /** @param {!proto.translate_chat.JoinChatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.translate_chat.JoinChatResponse.deserializeBinary
);


/**
 * @param {!proto.translate_chat.JoinChatRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.JoinChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatClient.prototype.joinChat =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/translate_chat.TranslateChat/JoinChat',
      request,
      metadata,
      methodInfo_TranslateChat_JoinChat);
};


/**
 * @param {!proto.translate_chat.JoinChatRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.JoinChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatPromiseClient.prototype.joinChat =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/translate_chat.TranslateChat/JoinChat',
      request,
      metadata,
      methodInfo_TranslateChat_JoinChat);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.translate_chat.AudioStreamRequest,
 *   !proto.translate_chat.AudioStreamResponse>}
 */
const methodInfo_TranslateChat_TranscribeAudioStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.translate_chat.AudioStreamResponse,
  /** @param {!proto.translate_chat.AudioStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.translate_chat.AudioStreamResponse.deserializeBinary
);


/**
 * @param {!proto.translate_chat.AudioStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.AudioStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatClient.prototype.transcribeAudioStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/translate_chat.TranslateChat/TranscribeAudioStream',
      request,
      metadata,
      methodInfo_TranslateChat_TranscribeAudioStream);
};


/**
 * @param {!proto.translate_chat.AudioStreamRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.AudioStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatPromiseClient.prototype.transcribeAudioStream =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/translate_chat.TranslateChat/TranscribeAudioStream',
      request,
      metadata,
      methodInfo_TranslateChat_TranscribeAudioStream);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.translate_chat.StopStreamRequest,
 *   !proto.translate_chat.StopStreamResponse>}
 */
const methodInfo_TranslateChat_StopAudioStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.translate_chat.StopStreamResponse,
  /** @param {!proto.translate_chat.StopStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.translate_chat.StopStreamResponse.deserializeBinary
);


/**
 * @param {!proto.translate_chat.StopStreamRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.translate_chat.StopStreamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.StopStreamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatClient.prototype.stopAudioStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/translate_chat.TranslateChat/StopAudioStream',
      request,
      metadata,
      methodInfo_TranslateChat_StopAudioStream,
      callback);
};


/**
 * @param {!proto.translate_chat.StopStreamRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.translate_chat.StopStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatPromiseClient.prototype.stopAudioStream =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.stopAudioStream(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.translate_chat.SendMessageRequest,
 *   !proto.translate_chat.SendMessageResponse>}
 */
const methodInfo_TranslateChat_SendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.translate_chat.SendMessageResponse,
  /** @param {!proto.translate_chat.SendMessageRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.translate_chat.SendMessageResponse.deserializeBinary
);


/**
 * @param {!proto.translate_chat.SendMessageRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.translate_chat.SendMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.SendMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/translate_chat.TranslateChat/SendMessage',
      request,
      metadata,
      methodInfo_TranslateChat_SendMessage,
      callback);
};


/**
 * @param {!proto.translate_chat.SendMessageRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.translate_chat.SendMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sendMessage(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.translate_chat.LeaveChatRequest,
 *   !proto.translate_chat.LeaveChatResponse>}
 */
const methodInfo_TranslateChat_LeaveChat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.translate_chat.LeaveChatResponse,
  /** @param {!proto.translate_chat.LeaveChatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.translate_chat.LeaveChatResponse.deserializeBinary
);


/**
 * @param {!proto.translate_chat.LeaveChatRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.translate_chat.LeaveChatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.translate_chat.LeaveChatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatClient.prototype.leaveChat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/translate_chat.TranslateChat/LeaveChat',
      request,
      metadata,
      methodInfo_TranslateChat_LeaveChat,
      callback);
};


/**
 * @param {!proto.translate_chat.LeaveChatRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.translate_chat.LeaveChatResponse>}
 *     The XHR Node Readable Stream
 */
proto.translate_chat.TranslateChatPromiseClient.prototype.leaveChat =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.leaveChat(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.translate_chat;

