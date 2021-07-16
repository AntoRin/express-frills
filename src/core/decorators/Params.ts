import { ArgEntity } from "../interfaces/ArgEntity";

export function Params(objectKey?: string) {
   return function (target: Object, key: string, index: number) {
      const requiredArg: ArgEntity = {
         index,
         argModel: [
            { type: "param", key: objectKey },
            ...(Reflect.getMetadata("method:param", target, key)?.argModel || ([] as ArgEntity["argModel"])),
         ],
      };

      Reflect.defineMetadata("method:param", requiredArg, target, key);
   };
}
