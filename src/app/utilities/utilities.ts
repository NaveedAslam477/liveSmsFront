// import { environment } from '../../environments/environment';

// export class Utilities {
//   public static getEpicVaultWebApibaseUrl() {
//     let base = '';
//     if (window.location.origin) {
//       base = window.location.origin;
//     } else {
//       base = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//       base = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//       return base.replace(/\/$/, '');
//     }
//     if (environment.apiBaseUrl) {
//       base = environment.apiBaseUrl;
//       return base.replace(/\/$/, '');
//     }
//   }

//   public static getMediaFileVaultWebApibaseUrl() {
//     let base = '';
//     if (window.location.origin) {
//       base = window.location.origin;
//     } else {
//       base = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//       base = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
//       return base.replace(/\/$/, '');
//     }
//     if (environment.mediaFileApiBaseUrl) {
//       base = environment.mediaFileApiBaseUrl;
//       return base.replace(/\/$/, '');
//     }
//   }
// }
