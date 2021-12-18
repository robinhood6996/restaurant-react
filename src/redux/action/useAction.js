export function signInUsingGoogle(payload) {
    return {
        type: 'SIGN_IN_WITH_GOOGLE',
        paylaod: payload,
    }
}