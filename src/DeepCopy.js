"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepCopy = void 0;
var DeepCopy;
(function (DeepCopy) {
    function deepCopy(source) {
        console.log(source);
        let answer = '';
        let type = typeof (source);
        console.log({ type });
        if (Array.isArray(source)) {
            answer = [...source];
            console.log({ answer });
            return answer;
        }
        if (typeof (source) === 'object') {
        }
        return answer;
    }
    DeepCopy.deepCopy = deepCopy;
})(DeepCopy = exports.DeepCopy || (exports.DeepCopy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVlcENvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWVwQ29weS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFpQixRQUFRLENBb0R4QjtBQXBERCxXQUFpQixRQUFRO0lBaUNyQixTQUFnQixRQUFRLENBQWdCLE1BQVM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBUyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQVMsT0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO1FBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQztZQUN0QixNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZCLE9BQU8sTUFBVyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxPQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO1NBR2hDO1FBR0QsT0FBTyxNQUFXLENBQUM7SUFDdkIsQ0FBQztJQWpCZSxpQkFBUSxXQWlCdkIsQ0FBQTtBQUVMLENBQUMsRUFwRGdCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBb0R4QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgRGVlcENvcHkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVlcCBjb3B5IG9mIGEgZGljdGlvbmFyeSBzdWNoIHRoYXQgYWxsIG9mIHRoZSBvcmlnaW5hIGtleXMgYXJlIG1haW50YWluZWRcbiAgICAgKiBhbmQgY29waWVkIGludG8gYSBuZXcgZGljdGlvbmFyeS5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZCB3aGVuIHdlIGhhdmUgdG8gY3JlYXRlIGEgY29weSBvZiBhIGRpY3Rpb25hcnkgdG8gcHJldmVudCBjb25jdXJyZW50IG11dGF0aW9uXG4gICAgICogb3Igd2hlbiB3ZSBuZWVkIHRvIGNvcHkgaXQgYW5kIHRoZW4gbWFrZSBjaGFuZ2VzIHRvIHRoZSBuZXcgZGljdGlvbmFyeS5cbiAgICAgKlxuICAgICAqIFRoZSB2YWx1ZXMgaW4gdGhlIG1hcCBjb3VsZCBiZSBhcnJheXMsIG90aGVyIGRpY3Rpb25hcmllcywgc2V0cywgbWFwcywgc3RyaW5ncywgYXJyYXlzLCBldGMuXG4gICAgICpcbiAgICAgKiBNYWtlIHN1cmUgdG8gaGFuZGxlIGFsbCBjYXNlcy5cbiAgICAgKlxuICAgICAqIFRoaXMgbmVlZHMgdG8gYmUgZnVsbHkgcmVjdXJzaXZlIGluY2x1ZGluZyBkaWN0aW9uYXJpZXMgY29udGFpbiBvdGhlciBkaWN0aW9uYXJpZXNcbiAgICAgKiBhbmQgYXJyYXlzLlxuICAgICAqXG4gICAgICogSElOVFNcbiAgICAgKlxuICAgICAqIC0gVG8gdGVzdCBpZiBhIHZhcmlhYmxlIGlzIGFuIG9iamVjdDpcbiAgICAgKlxuICAgICAqIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnXG4gICAgICpcbiAgICAgKiAtIFRvIHRlc3QgaWYgYSB2YXJpYWJsZSBpcyBhbiBhcnJheTpcbiAgICAgKlxuICAgICAqIEFycmF5LmlzQXJyYXkob2JqZWN0KVxuICAgICAqXG4gICAgICogLSBUbyBnZXQgYWxsIHRoZSBrZXlzIG9mIGFuIG9iamVjdCB5b3UgY2FuIGNhbGwgT2JqZWN0LmtleXMoZGljdClcbiAgICAgKlxuICAgICAqIC0gSWYgeW91IGFyZSBnaXZlbiBhbiBhcnJheSBhcyBpbnB1dCBpdCBzaG91bGQgcmV0dXJuIGFuIGFycmF5IGFzIG91dHB1dC5cbiAgICAgKlxuICAgICAqIC0gSWYgeW91IGFyZSBnaXZlbiBhbiBvYmplY3QgYXMgaW5wdXQgaXQgc2hvdWxkIHJldHVybiBhbiBvYmplY3QgYXMgb3V0cHV0LlxuICAgICAqXG4gICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5PFQgZXh0ZW5kcyBhbnk+KHNvdXJjZTogVCk6IFQge1xuICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuICAgICAgICBsZXQgYW5zd2VyIDogYW55ID0gJyc7XG4gICAgICAgIGxldCB0eXBlIDogYW55ID0gdHlwZW9mKHNvdXJjZSlcbiAgICAgICAgY29uc29sZS5sb2coe3R5cGV9KVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKXsgXG4gICAgICAgICAgICBhbnN3ZXIgPSBbLi4uc291cmNlXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgYW5zd2VyIH0pXG4gICAgICAgICAgICByZXR1cm4gYW5zd2VyIGFzIFQ7XG4gICAgICAgIH0gXG4gICAgICAgIGlmICh0eXBlb2Yoc291cmNlKSA9PT0gJ29iamVjdCcpIHsgXG4gICAgICAgICAgICAvLyBhbnN3ZXIgID0gT2JqZWN0LmtleXMoc291cmNlIDoge30pICBhcyBBcnJheTxrZXlvZiB0eXBlb2Ygc291cmNlPjtcblxuICAgICAgICB9IFxuXG4gICAgICAgIC8vIFRPRE86IGltcGxlbWVudCB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGFib3ZlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gICAgICAgIHJldHVybiBhbnN3ZXIgYXMgVDtcbiAgICB9XG5cbn1cbiJdfQ==