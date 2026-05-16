<?php
declare(strict_types=1);

// WaybackMachine SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WaybackMachineUtility::setRegistrar(function (WaybackMachineUtility $u): void {
    $u->clean = [WaybackMachineClean::class, 'call'];
    $u->done = [WaybackMachineDone::class, 'call'];
    $u->make_error = [WaybackMachineMakeError::class, 'call'];
    $u->feature_add = [WaybackMachineFeatureAdd::class, 'call'];
    $u->feature_hook = [WaybackMachineFeatureHook::class, 'call'];
    $u->feature_init = [WaybackMachineFeatureInit::class, 'call'];
    $u->fetcher = [WaybackMachineFetcher::class, 'call'];
    $u->make_fetch_def = [WaybackMachineMakeFetchDef::class, 'call'];
    $u->make_context = [WaybackMachineMakeContext::class, 'call'];
    $u->make_options = [WaybackMachineMakeOptions::class, 'call'];
    $u->make_request = [WaybackMachineMakeRequest::class, 'call'];
    $u->make_response = [WaybackMachineMakeResponse::class, 'call'];
    $u->make_result = [WaybackMachineMakeResult::class, 'call'];
    $u->make_point = [WaybackMachineMakePoint::class, 'call'];
    $u->make_spec = [WaybackMachineMakeSpec::class, 'call'];
    $u->make_url = [WaybackMachineMakeUrl::class, 'call'];
    $u->param = [WaybackMachineParam::class, 'call'];
    $u->prepare_auth = [WaybackMachinePrepareAuth::class, 'call'];
    $u->prepare_body = [WaybackMachinePrepareBody::class, 'call'];
    $u->prepare_headers = [WaybackMachinePrepareHeaders::class, 'call'];
    $u->prepare_method = [WaybackMachinePrepareMethod::class, 'call'];
    $u->prepare_params = [WaybackMachinePrepareParams::class, 'call'];
    $u->prepare_path = [WaybackMachinePreparePath::class, 'call'];
    $u->prepare_query = [WaybackMachinePrepareQuery::class, 'call'];
    $u->result_basic = [WaybackMachineResultBasic::class, 'call'];
    $u->result_body = [WaybackMachineResultBody::class, 'call'];
    $u->result_headers = [WaybackMachineResultHeaders::class, 'call'];
    $u->transform_request = [WaybackMachineTransformRequest::class, 'call'];
    $u->transform_response = [WaybackMachineTransformResponse::class, 'call'];
});
