import { jest } from "@jest/globals";
import mock from "./mock";
import {
	p_clone,
	p_deepMerge,
	p_forEach,
	p_getWorkingFolder,
	p_o_freeze,
} from "./pillar";

describe("Test pillar methods", () => {
	describe("Should run p_getWorkingFolder tests", () => {
		test("Should return the current working folder", () => {
			expect(p_getWorkingFolder()).toBeTruthy();
		});
	});

	describe("Should run p_o_freeze tests", () => {
		test("Should return a frozen object", () => {
			expect(p_o_freeze(mock.p_o_freeze.positive.toFreeze)).toBeTruthy();
		});
		test("Should return null for none-object", () => {
			expect(p_o_freeze(mock.p_o_freeze.negative.toFreezeNull)).toBeNull();
		});
	});

	describe("Should run p_clone tests", () => {
		test("Should return a cloned object", () => {
			const jMock = jest.fn((o) => p_clone(o));
			const cloned = jMock(mock.p_clone.positive.toClone);
			expect(cloned).toEqual(mock.p_clone.positive.toClone);
		});
		test("Should return null for none-object", () => {
			expect(p_clone("")).toBeFalsy();
		});
	});

	describe("Should run p_deepMerge tests", () => {
		test("Should return a merged object", () => {
			const jMock = jest.fn((f, t) => p_deepMerge(f, t));
			const merged = jMock(
				mock.p_deepMerge.positive.fromMerge,
				mock.p_deepMerge.positive.toMerge,
			);
			expect(merged).toEqual({
				...mock.p_deepMerge.positive.fromMerge,
				...mock.p_deepMerge.positive.toMerge,
			});
		});
		test("Should return null no arguments have passed", () => {
			expect(p_deepMerge()).toBeFalsy();
		});
		test("Should return null if only one argument passed", () => {
			expect(p_deepMerge(mock.p_deepMerge.positive.fromMerge)).toBeFalsy();
		});
	});
	describe("Should run p_forEach tests", () => {
		test("Should return truthy for an object iterable", () => {
			const jMock = jest.fn((o, f) => p_forEach(o, f));
			const returnValue = jMock(
				mock.p_forEach.positive.main,
				mock.p_forEach.positive.objectHandler,
			);
			expect(returnValue).toBeTruthy();
		});

		test("Should return truthy for an object array iterable", () => {
			const jMock = jest.fn((o, f) => p_forEach(o, f));
			const returnValue = jMock(
				mock.p_forEach.positive.list,
				mock.p_forEach.positive.arrayHandler,
			);
			expect(returnValue).toBeTruthy();
		});
		test("Should return falsey for primitive values", () => {
			const jMock = jest.fn((o, f) => p_forEach(o, f));
			const returnValue = jMock("text");
			expect(p_forEach(returnValue)).toBeFalsy();
		});
		test("Should return falsey if only one argument passed", () => {
			expect(p_forEach(mock.p_forEach.positive.main)).toBeFalsy();
		});
	});
});
