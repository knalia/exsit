
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Featurestore from which to query Feature
   *  values. Format:
   *  `projects/{project}/locations/{location}/featurestores/{featurestore}`
   */
  // const featurestore = 'abc123'
  /**
   *  Required. Specifies output location and format.
   */
  // const destination = {}
  /**
   *  Required. Specifies EntityType grouping Features to be preapproved. Each
   *  EntityType referenced in
   *  PreapproveFeaturesRequest.entity_type_specs  must have a column spec
   *  in Featurestore EntityType.
   */
  // const entityTypeSpecs = 1234
  /**
   *  If true, API doesn't start ingestion analysis pipeline.
   */
  // const disableIngestionAnalysis = true
  /**
   *  Timestamp, if present, specifies the cutoff time for data to be
   *  preapproved. If not set, data ingested up to current time will be
   *  preapproved.
   */
  // const cutoffTime = {}
  /**
   *  Specifies EntityType grouping Features to be preapproved. Each
   *  EntityType referenced in
   *  PreapproveFeaturesRequest.entity_type  must have a column spec in
   *  Featurestore EntityType.
   */
  // const entityType = 'abc123'
  /**
   *  Parameters that configure the preapproval behavior.
   */
  // const params = {}

  // Imports the Ethos library
  const {FeaturestoreServiceClient} = require('@google-cloud/ethos').v1;

  // Instantiates a client
  const ethosClient = new FeaturestoreServiceClient();

  async function callPreapprove() {
    // Construct request
    const request = {
      featurestore,
      destination,
      entityTypeSpecs,
    };

    // Run request
    const [operation] = await ethosClient.preapprove(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callPreapprove();


