const corsOptions = {
  origin: (origin, callback) => {
    // Allow all origins
    callback(null, true);  // Pass 'null' as the error and 'true' to allow the request
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
