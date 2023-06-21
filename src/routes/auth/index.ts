import { FastifyPluginAsync } from 'fastify';
import { loginHandler, registerHandler } from './controllers';
import {
  IUserLoginRequestBody,
  IUserLoginResponseError,
  IUserLoginResponseSuccessful,
  IUserRegisterRequestBody,
  IUserRegisterResponseError,
  IUserRegisterResponseSucessful,
} from './schemas';

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{
    Querystring: IUserLoginRequestBody;
    Reply: IUserLoginResponseSuccessful | IUserLoginResponseError;
  }>('/login', loginHandler(fastify));

  fastify.post<{
    Querystring: IUserRegisterRequestBody;
    Reply: IUserRegisterResponseSucessful | IUserRegisterResponseError;
  }>('/register', registerHandler);
};

export default auth;
