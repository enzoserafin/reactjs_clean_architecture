import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-respose'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  reponse: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.reponse)
  }
}
