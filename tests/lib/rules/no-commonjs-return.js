/**
 * @file    Tests for `no-commonjs-return` rule
 * @author  Casey Visco <cvisco@gmail.com>
 */

"use strict";

const testRule = require("../../rule-tester");
const fixtures = require("../../fixtures");
const rule = require("../../../lib/rules/no-commonjs-return");

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ERROR = {
    message: "Unexpected `return` in module definition.",
    type: "ReturnStatement"
};

testRule("no-commonjs-return", rule, {

    valid: [
        fixtures.OBJECT_DEFINE,
        fixtures.FUNCTION_DEFINE,
        fixtures.AMD_DEFINE,
        fixtures.AMD_EMPTY_DEFINE,
        fixtures.NAMED_OBJECT_DEFINE,
        fixtures.NAMED_FUNCTION_DEFINE,
        fixtures.NAMED_AMD_DEFINE,
        fixtures.NAMED_AMD_EMPTY_DEFINE,
        fixtures.NAMED_CJS_DEFINE,
        fixtures.CJS_WITH_EXPORTS,
        fixtures.CJS_WITH_MODULE_EXPORTS,
        fixtures.CJS_WITH_FUNC_EXPR,
        fixtures.CJS_WITH_NESTED_RETURNS
    ],

    invalid: [
        {
            code: fixtures.CJS_WITH_RETURN,
            errors: [ERROR]
        }
    ]

});
