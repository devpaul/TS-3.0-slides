// The unknown type is the least-capable type requiring a type guard or a cast

interface ErrorMessage {
	reason: string;
}

interface HttpResponse {
	data: string[];
}

/**
 * @param response JSON response from the server
 */
function handleHttpResponse(response: unknown): string[] | never {
	if (isErrorMessage(response)) {
		console.error(response.reason);
		throw new Error(response.reason);
	}
	else if(isHttpResponse(response)) {
		return response.data;
	}

	throw new Error('unrecoginized response');
}

function isErrorMessage(value: any): value is ErrorMessage {
	return value && typeof value.reason === 'string';
}

function isHttpResponse(value: any): value is HttpResponse {
	return value && Array.isArray(value.data);
}
