
class Util {
    constructor(){}

    getCategory(code){
        switch(code){
            case "action": return "액션";
            case "comedy": return "코메디";
            case "drama": return "드라마";
            case "family_kids": return "가족&어린이";
            case "korean": return "한국영화";
            case "rommance": return "로맨스";
            case "sf_fantasy": return "공상과학";
            case "tv": return "TV";
            case "winner": return "수상작";
            default: return "기타"
        }
    }
}

export default util