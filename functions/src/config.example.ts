import FunctionConfig from "./covtakt/types/FunctionConfig";
import Authenticator from "./covtakt/utils/Authenticator";
import PinGenerator from "./covtakt/utils/PinGenerator";
import DataForwarder from "./covtakt/utils/DataForwarder";
import AnalyzeInfectedUser from './covtakt/utils/AnalyzeInfectedUser';

const config: FunctionConfig = {
  projectId: "",
  regions: [],
  utcOffset: 0,
  authenticator: new Authenticator(),
  encryption: {
    defaultAlgorithm: "",
    keyPath: "encryptionKeyPath",
    defaultVersion: 1,
  },
  tempID: {
    validityPeriod: 0.25, // in hours
    refreshInterval: 12,  // in hours
    batchSize: 100, // sufficient for 24h+
  },
  upload: {
    pinGenerator: new PinGenerator(),
    bucket: "upload-bucket", //
    recordsDir: "streetPassRecords",
    testsDir: "tests",
    tokenValidityPeriod: 2, // in hours
    codeValidityPeriod: 10, // in minutes
    bucketForArchive: "archive-bucket",
    logDBCollection: "uploadLogs",
    dataForwarder: new DataForwarder(),
    analyzeInfectedUser: new AnalyzeInfectedUser(),
    adminApiKey: 'gjnnbaa-eqsmtye-jthb8bx-gpqgnj0'
  },
  notification: {
    minDuration: 10,
    minDistance: 2
  }
};

export default config;
