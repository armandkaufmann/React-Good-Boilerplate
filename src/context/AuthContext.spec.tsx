import {AuthProvider, useAuth} from "./AuthContext";
import {renderHook} from "@testing-library/react";

describe("AuthContext", () => {
    const wrapper = AuthProvider;

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it("Has no user when first loading the context provider, and no user in local storage", () => {
        const { result } = renderHook(() => useAuth(), { wrapper });

        expect(result.current.user).toBeNull();
    });
});