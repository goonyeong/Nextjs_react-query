import { useLngCurrent } from "@/store/useLngStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/** query object -> query string */
function getQueryString(obj: any) {
  let result = "?";
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const v = obj[k];
    if (Object.prototype.toString.call(v).toString() === "[object Array]") {
      v.map((item: { toString: () => string }, i: number) => {
        result = result.concat(k, `[${i}]`, "=", item.toString(), "&");
      });
    } else {
      v != null ? (result = result.concat(k, "=", v.toString(), "&")) : "";
    }
  }

  if (result.charAt(result.length - 1) == "&") {
    result = result.substring(0, result.length - 1);
  }

  return result;
}

export const useCustomRouter = () => {
  const lng = useLngCurrent();
  const pathname = usePathname();
  const { forEach } = useSearchParams();
  const { push: navigationPush, replace: navigationReplace, ...router } = useRouter();

  /** query string -> query object */
  const parseQuery = () => {
    let params: {
      [key: string]: string | string[] | number | number[] | (string | number)[];
    } = {};

    forEach((initialValue, key) => {
      const value = initialValue.toString();
      // 중복된 키값이 있을 경우, 하나의 키에 배열로 담아서 반환
      if (Object.keys(params).includes(key)) {
        params = {
          ...params,
          [key]: Array.from(new Set([...(params[key] as []), value])),
        };
        return;
      }
      // 키 : 밸류로 반환
      params = { ...params, [key]: value };
    });

    return params;
  };

  const query = parseQuery();

  const push = (path: string, obj?: any) => {
    if (obj) {
      const queryString = getQueryString(obj);
      navigationPush(`/${lng}${path}/${queryString}`);
    } else {
      navigationPush(`/${lng}${path}`);
    }
  };

  const replace = (path: string, obj?: any) => {
    if (obj) {
      const queryString = getQueryString(obj);
      navigationReplace(`/${lng}${path}/${queryString}`);
    } else {
      navigationReplace(`/${lng}${path}`);
    }
  };

  const getPath = (index: number) => {
    const path = pathname.split("/")[index];

    if (!path) {
      return "";
    } else {
      return path;
    }
  };

  return { push, replace, pathname, query, getPath, ...router };
};
